package com.food.REST;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.food.Service.CentralService;
import com.food.model.Product;

@RestController
@RequestMapping("/products")
@CrossOrigin
public class ProductRest {


	@Autowired
	private CentralService service;
	@GetMapping("/")
	public List<Product> getProducts()
	{
		List<Product> products=service.getProducts();
		for(int i=0;i<products.size();i++)
		{
			products.get(i).setImg(decompressBytes(products.get(i).getImg()));
		}
		return products;
	}
	@GetMapping("/{id}")
	public Product getProduct(@PathVariable int id) {
		Product product= service.getProducts(id);
		product.setImg(decompressBytes(product.getImg()));
		return product;
	}
	@PostMapping("/")
	public void addProduct(@RequestParam("img")MultipartFile file,@RequestParam("product") String temp) throws IOException {
		Product product=new ObjectMapper().readValue(temp, Product.class);
		product.setImg(compressBytes(file.getBytes()));
		service.saveProduct(product);
	}
	@PutMapping("/")
	public void updateProduct(@RequestBody Product product) {
		product.setImg(compressBytes(product.getImg()));
		service.updateProduct(product);
	}
	@DeleteMapping("/{id}")
	public void deleteProduct(@PathVariable int id) {
		service.deleteProduct(id);
	}

	// compress the image bytes before storing it in the database
	public static byte[] compressBytes(byte[] data) {
		Deflater deflater = new Deflater();
		deflater.setInput(data);
		deflater.finish();
		ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
		byte[] buffer = new byte[1024];
		while (!deflater.finished()) {
			int count = deflater.deflate(buffer);
			outputStream.write(buffer, 0, count);
		}
		try {
			outputStream.close();
		} catch (IOException e) {
		}
		System.out.println("Compressed Image Byte Size - " + outputStream.toByteArray().length);
		return outputStream.toByteArray();
	}
	// decompress the image bytes before passing to front end
	public static byte[] decompressBytes(byte[] data) {
		Inflater inflater = new Inflater();
		inflater.setInput(data);
		ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
		byte[] buffer = new byte[1024];
		try {
			while (!inflater.finished()) {
				int count = inflater.inflate(buffer);
				outputStream.write(buffer, 0, count);
			}
			outputStream.close();
		} catch (IOException ioe) {
		} catch (DataFormatException e) {
		}
		return outputStream.toByteArray();
	}
}

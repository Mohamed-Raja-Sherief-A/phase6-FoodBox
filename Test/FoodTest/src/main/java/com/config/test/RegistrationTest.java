package com.config.test;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class RegistrationTest {
	XSSFWorkbook wbook;
	XSSFSheet sheet;
	@BeforeTest
	public void config(){
		System.setProperty("webdriver.chrome.driver", "driver/chromedriver.exe");
		TestClass1.driver=new ChromeDriver();
		TestClass1.driver.get("http://localhost:4200");
		TestClass1.driver.manage().window().maximize();
		TestClass1.driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
	}
	@Test(description="Sign up click Button")
	public void Test1(){
		WebElement element = TestClass1.driver.findElement(By.id("sign-up-button"));
		element.click();
	}
	@Test(description="Sign up form fill")
	public void Test2() throws IOException {
		FileInputStream file=new FileInputStream("datasheet.xlsx");
		wbook=new XSSFWorkbook(file);
		sheet=wbook.getSheet("registration");
		WebElement element = TestClass1.driver.findElement(By.id("sign-up-username"));
		element.sendKeys(sheet.getRow(2).getCell(0).getStringCellValue());
		WebElement element1 = TestClass1.driver.findElement(By.id("sign-up-password"));
		element1.sendKeys(sheet.getRow(2).getCell(1).getStringCellValue());
		WebElement element2 = TestClass1.driver.findElement(By.id("sign-up-repassword"));
		element2.sendKeys(sheet.getRow(2).getCell(2).getStringCellValue());
		/*WebElement element3 = TestClass1.driver.findElement(By.id("sign-up-cofirm"));
		element3.click();*/
	}
}

package com.config.test;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;


public class LoginTest {
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

	@Test(description="Click Login Button")
	public void Test1(){
		WebElement element = TestClass1.driver.findElement(By.id("login-button"));
		element.click();
	}
	
	@Test(description="Enter Login Credentials")
	public void Test2() throws IOException {
		FileInputStream file=new FileInputStream("datasheet.xlsx");
		wbook=new XSSFWorkbook(file);
		sheet=wbook.getSheet("login");
		DataFormatter formatter = new DataFormatter();
		WebElement element=TestClass1.driver.findElement(By.id("login-username"));
		element.sendKeys(sheet.getRow(2).getCell(0).getStringCellValue());
		WebElement element1=TestClass1.driver.findElement(By.id("login-password"));
		Cell cell= sheet.getRow(2).getCell(1);
		element1.sendKeys(formatter.formatCellValue(cell));
		WebElement element2=TestClass1.driver.findElement(By.id("login-confirm"));
		element2.click();
	}
	
	@Test(description="Login Check")
	public void Test3() {
		WebDriverWait wait = new WebDriverWait(TestClass1.driver, 2);
	    wait.until(ExpectedConditions.alertIsPresent());
		String alert=TestClass1.driver.switchTo().alert().getText();
		Boolean value=alert.equals("Invalid username / password");
		try {
		Assert.assertFalse(value);
		}
		catch(Exception e) {
			System.out.println("Invalid username / password");
		}
	}
	
}

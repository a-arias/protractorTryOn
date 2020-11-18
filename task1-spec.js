const expect = global['chai'].expect;
const EC = protractor.ExpectedConditions;

describe('Task 1', function() {
      beforeEach(function() {
        //making available to test on not angular page
        browser.ignoreSynchronization = true;
        
        //maximize window before testexecution
        return browser.manage().window().maximize();
    });

    it('should be able to navigate to contact us form', async function() {
      //navigate to epam page
      await browser.get('https://www.epam.com');

      //search for contact button and clicking it
      await element(by.css('[data-gtm-category="header-contact-cta"]')).click();
      
      //we wait 3 seconds (not good practice)
      await browser.driver.sleep(3000);

      //we got the submit button on the page to perform assertion
      const getSubmitButton = element(by.css("[type='submit']"));

      //Asserts we are on contact us page
      expect(await getSubmitButton.isPresent()).to.equal(true);

      //fills out first name
      await element(by.id('_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_first_name')).sendKeys('Julie');
     
      //fills out last name
      await element(by.xpath("//*[@id='_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_last_name']")).sendKeys('vendor');  
      
      //fills out user email
      await element(by.css('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_email')).sendKeys('julie@vendor.com');  
      
      //fills out user phone
      await element(by.id('_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_phone')).sendKeys('777777777');
      
      //fills out Comment
      await element(by.id('_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_comment')).sendKeys('I love EPAM!!!!');  

      //accept cookies
      await element(by.css('span.button__content')).click();

      //wait 1 seconds (not good practice)
      await browser.driver.sleep(1000);

      //click how did you hear about us list
      await element.all(by.css('span.select2-selection__rendered')).last().click();

      //wait 1 seconds (not good practice)
      await browser.driver.sleep(1000);

      //click the first element on the list
      await element.all(by.css('li.select2-results__option')).first().click();

      //fill the new input added from list response
      await element(by.id('id-07e96799-2272-3660-8629-ab94f9d94b1d')).sendKeys('My perfect Event');

      //we wait 1 seconds (not good practice)
      await browser.driver.sleep(1000);

      //click processing personal info checkbox
      await element.all(by.css('div.checkbox-ui')).first().click();

      //click submit button
      await element(by.css("[type='submit']")).click();

      //wait 1 seconds (not good practice)
      await browser.driver.sleep(1000);

      //switch to iframe
      await browser.switchTo().frame(element(by.xpath("//iframe[@title='recaptcha challenge']")).getWebElement());

      //getting captcha button
      const captchaButton = element(by.css("button.rc-button-default.goog-inline-block"));

      //wait 1 seconds (not good practice)
      await browser.driver.sleep(2000);

      //Asserts Captcha is Present on the page
      expect(await captchaButton.isPresent()).to.equal(true);
    });
});
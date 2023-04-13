
import React from 'react';
import Accordion from '../Accordian';

const Accordian = () => {
  const accordionData = [
    {
      title: 'Can I login with multiple accounts on my phone?',
      content: `
      No, you can only login with one account on your device.
      I’m unable to login even after providing my email address.
      That shouldn’t be happening. Please send us an email about the issue at 
      support@vorpstech.com
     How to Install?
      Click on the download app button. The installation doesn’t take a lot of time and is simple. Once you open the apk file, your phone will ask for permission. Click ‘allow’ on all permission requests and install the app on to your phone. We promise you our game is safe and secure!`
    },
    {
      title: 'What is a ‘Wallet’?',
      content:`
      Wallet is the icon you see below your name along with an amount. Clicking on it will take you to the ‘My Wallet’ page which has details like your Added Amount, Winnings, Bonus and Transaction History.
      Is it safe to add money to the wallet?
      Yes, adding money to your wallet is absolutely safe. We have partnerships with the best in the industry who ensure the money transactions are smooth and safe. You can add money using UPI, net banking, wallets, credit cards and debit cards.
      I am not able to withdraw my Bonus Cash. Why?
      Bonus Cash is not withdrawable. A portion of your bonus cash along with your deposits is used for tournament registrations.
      How do I deposit money into my wallet?
      Depositing money into your wallet is very easy and safe. Here are the steps: Tap on your wallet > Click “Add” to deposit amount > Enter amount > Add play money > Complete transaction.
      Can I withdraw the money I deposited into my wallet?
      No, the amount that you deposit in your wallet can only be used to play games. You can withdraw your Winnings anytime you like.
      How can I withdraw money?
      You can withdraw money from your Winnings. Your account should have at least a balance of ₹60 to make a withdrawal.
      What are the options for withdrawing my winnings?
      Currently, there are two withdrawal modes: Net banking and UPI. Both of the options offer safe and secure withdrawals.
      I want to deposit money into my wallet. What are the payment modes available?
      You can use UPI, netbanking, wallets, credit card and debit card to deposit your money into your wallet. It is 100% safe and secure!
      I am not able to use my coupon code. Can you help?
      Please recheck the coupon code or try selecting a coupon code from an available list of coupon codes. You can find all available coupon codes in the coupon section. You can swipe on the coupons to see which one you want to use. Click ‘Apply’ to check if your coupon is applicable. If not, adjust the amount or choose a different coupon.
    
    Where can I find details of my previous transactions?
    You can check your entire transaction history on the ‘My Wallet’ screen. Click on the “tournament history” section on the wallet screen to see all the transactions. Your transaction history will show you all information related to Added Amount, Withdrawals, Entry fees, Refunds, Cashbacks, and Winnings.
    I’m getting “Error in Payment. Please Retry”.
    Please check your wallet. If the necessary amount hasn’t been added to your deposits, email us at support@vorpstech.com
    Where will the cashback be deposited?
    Your cashback will be added to your Added Amount. If it’s a bonus cashback, the cashback amount will be deposited into your Bonus.
    I’m unable to find my preferred mode of payment. What are the other options I have?
    We support all major payment providers. If you find your preferred payment mode missing, please email us at  support@vorpstech.com and we would be happy to explore additional payment modes.
    Are my card details safe with your app?
    Yes, we ensure your card details and any other personal information are 100% secure and never shared with a third party.
    How do I receive a refund?
    If you had registered for a tournament but could not get a table, the charged amount will be credited automatically to your deposit.
    How to add a UPI account?
    To add your UPI account, you have to follow a few simple steps.
    
      Click on the wallet icon
    On the ‘My Wallet’ page, click on ‘Withdraw’ button
    Now you will see two options; Bank & UPI. Click on ‘Add’ button against the UPI option.
    Enter your UPI id in the space provided and click on ‘Proceed’.
    Where to check cashback offers?
    We always have cashback offers live on our app! You can chec
      k out the cashback offers while adding money to your wallet. Once you are on the ‘Add Money’ page, you can view all the cashback coupons available by swiping on them. Once you have decided which cashback coupon to use, just click on ‘Apply’ and the coupon will automatically be applied.
    Can I withdraw the entire wallet balance?
    No, you can only withdraw the ‘Winnings’, that is the money you won by playing games on our app.
    How to add my bank account?
    To add your bank account, you have to follow a few simple steps.
    
      Click on the wallet icon
      On the ‘My Wallet’ page, click on ‘Withdraw’ button
      Now you will see two options; Bank & UPI. Click on ‘Add’ button against the Bank option.
      Enter your account details in the space provided and click on ‘Proceed’ to add your bank.
    `
    },
    {
      title: 'How long does it take to receive the referral amount?',
      content: `It’s done instantly as soon as your friend joins and performs the actions mentioned in the referral policy at the time of being referred by you. In case your referral is delayed by more than a few minutes, email us here support@vorpstech.com
     What are your referral terms and policy?
      Check our referral policy from Settings > Refer & Earn.
     How many users can I refer?
      Please check our referral policy from Settings > Refer & Earn to know more about referral terms and conditions
      On applying the referral code, I’m getting ‘Invalid Referral Code’.
      Please ask your friend to recheck the code. If your problem persists, email us here  support@vorpstech.com
     Is it safe for my friends to download the apk shared on Whatsapp?
      Yes, it’s totally safe to download and install the apk.`
    },
    {
        title: 'Can I add a display picture?',
        content: `  Yes, you can add a display picture by going to the ‘My Profile’ section and clicking on the icon above your name. Now, you can either add a photo from your phone gallery or even take a picture. To edit an existing photo, follow the same steps and add a different picture.
        Can I use any image?
        We recommend you use your own picture as a profile avatar. Your image should not contain nudity or otherwise offensive content.
        Can I change my email ID or phone number associated with my account?
          No, currently, it is not possible to change email ID or phone number.
          ?
        Please check our referral policy from Settings > Refer & Earn to know more about referral terms and conditions
        On applying the referral code, I’m getting ‘Invalid Referral Code’.
        Please ask your friend to recheck the code. If your problem persists, email us here support@vorpstech.com
        Can I play from a territory outside India?
        No, our games are as of now only for the residents of India barring Assam, Orissa, Telangana, Sikkim, Andhra Pradesh, Nagaland, Arunachal Pradesh and Meghalaya.
        My account was blocked, what can I do?
        In case your account was blocked, you can raise a support request on support@vorpstech.com
        Can I play games on your app if I am under 18?
        No, you need to be 18 or older to play the games on our platform.
        Who is not allowed to play games?
        Anyone under the age of 18 cannot play our games. If you are from Andhra Pradesh/Assam/Odisha/Sikkim/Nagaland/Telangana/Arunachal Pradesh/Meghalaya, you cannot play our games as skill game laws pertaining to these states are different from the rest of the country.
        How to contact the HelpDesk?
        You can use the HelpDesk to ask us any questions or raise any issue with us.
        
          Go to ‘Settings’ page and click on ‘Helpdesk’ option
          Here you can raise an issue by clicking on the ‘Create Ticket’ button or the ‘New Ticket’ button.
          On this screen, you can choose any specific issue from the drop down menu.
          Once selected, you need to write down details of the issue you are facing.
          You can click on the attachment icon to attach any screenshots you might have.
          Click ‘Submit’ to register the issue with us.
          On the main screen of Helpdesk, you can see all the open tickets you have raised and also the closed ones.
        `
      }
  ];

  return (
    <div>
          <div align="center">
      <h4
        style={{
          fontStyle: '"kghappy"',
          fontSize: 30,
          WebkitTextStroke: "1px black",
          fontWeight: 800,
          paddingBottom: 40,
          color: "#FDE200",
          paddingTop: 40
        }}
      >
        FAQs
      </h4>
    </div>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default Accordian;
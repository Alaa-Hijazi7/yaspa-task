Yaspa
Interview Exercise

OVERVIEW
You are designing a bank selector where the user will be able to select the bank that they want to
pay from. The user will be able to search for his bank. The bank has 2 categories, fast bank and
slow bank. When the user will be selecting a slow bank, a bottom sheet should be shown to
notify the user that the payment will not be instant and it will take some time to complete.

GOALS
1. Create a screen with the list of the banks, where the user has the ability to search for his
bank. The list should be Virtualised for performance optimization
2. If the user clicks the “try searching” link in the bottom, the page should scroll and focus
the search input
3. When the user clicks a bank, the user should be redirected to the preview page
4. If the selected bank is slow, a bottomsheet portal should be shown to notify the user that
the bank is slow and the user can close the modal either by clicking the “X” or by clicking
the “Ok” button.
5. If the user clicks the “Change” button next to the selected bank, the user should be
redirected back to the bank selector.

SPECIFICATIONS
● The project should be written in ReactJs.
● You should use state management, the Context API is suggested but you can use which
one you are familiar with.
● You can find the bank list in banks.json file in the assets. All images that you will need will
be included in the assets.
● You should use state management to keep the payment session. The payment session
example can be found in PaymentSession.js in the assets. The reference is used in
Payment preview and the amount, reference and merchantName on all the views.

● The base url for the bank icons is: https://test-static.yaspa.com/banks/logos
E.g If the logo of the bank is monzo.svg the url to get the icon is
https://test-static.yaspa.com/banks/logos/monzo.svg
● The styles its ok not to be perfect and you can use any css library that you are familiar
with.
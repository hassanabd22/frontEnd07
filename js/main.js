/* navbar*/
const faq = document.querySelector(".faq");
const ans = document.querySelector(".ans");

faq.addEventListener("click", function (){
        if (ans.classList.contains("active")){
        ans.classList.remove("active");
        }
        else {
            ans.classList.add("active");
        }1
})

// const faqs = document.querySelector(".faq");

// faqs.foreach((faq) => {
//         faq.addEventListener("click", () => {
//             faq.classList.toggle("active");
//         });
//     });
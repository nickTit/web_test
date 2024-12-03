$(document).ready(function(){

$(".button").click(function() {
    $("html,body").animate({scrollTop: 0}, 1000);
    console.log("asd");
});




parent.onclick = function(event){
    let containers = document.querySelectorAll(".book_cont");
    let target = event.target; //картинка
    if (target.tagName !='IMG' || target.id === "useless"){
        return;
    }
    containers.forEach(container => {
        container.style.backgroundColor = "#F2AB6D"
        let textElement = container.querySelector('.description');
        
        
    })

    
    let bookCont = target.closest('.book_cont'); //ближайший к картинке вверх по дому
    target.closest('.book_cont').style.backgroundColor = "#ce8f58";//bookCont
    
    let a = bookCont.querySelector('.text').textContent;//тож самое но вниз

    console.log(a);
    
    description.classList.remove('active'); // Сначала сворачиваем
    info.classList.remove('active'); // Сначала сворачиваем
    setTimeout(() => {
        //description.innerHTML = bookInfo; // Изменяем содержимое после сворачивания
        description.textContent = a;
        description.classList.add('active'); // Затем разворачиваем
         info.classList.add('active'); // Затем разворачиваем
    
    }, 500);
    
}



const searchInput = document.getElementById('searchInput');
const books = document.querySelectorAll('.name');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    books.forEach(book =>{
        const bookText = book.textContent.toLowerCase();
        console.log(bookText)
        if (bookText.includes(query)) {
            // Показываем элемент, если он соответствует запросу
            book.closest('.book_cont').style.display = 'block';
        } else {
            // Скрываем элемент, если он не соответствует запросу
            book.closest('.book_cont').style.display = 'none';
        }
        
    })
    
    
})


const genres = $(".genre");

$(".dropdown-menu").on("click", function(event){
    
    let clickedElement = $(event.target)
    $(".name").closest('.book_cont').css('display', 'block')
    
    let text_elem = clickedElement.text().toLowerCase();
    genres.each(function() {
        let book_genre = $(this)
        if (!book_genre.text().toLowerCase().includes(text_elem)){
            $(this).closest('.book_cont').css('display', 'none')
        }
    })

})


});
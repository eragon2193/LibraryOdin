addEventListener('DOMContentLoaded', () => {
  const myLibrary = []
  const grid = document.getElementById('grid-book')
  class Book {
    constructor (author, title, pages, checked) {
      this.author = author
      this.title = title
      this.pages = pages
      this.checked = checked
    }
  }
  const remove = (index) => {
    myLibrary.splice(index, 1)
    while (grid.hasChildNodes()) {
      grid.removeChild(grid.lastChild)
    }
    createDivs()
  }
  const createDivs = () => {
    myLibrary.forEach((a, index) => {
      const p1 = document.createElement('p')
      p1.innerText = a.title
      const p2 = document.createElement('p')
      p2.innerText = a.author
      const p3 = document.createElement('p')
      p3.innerText = a.pages
      const checkBoxDiv = document.createElement('div')
      checkBoxDiv.classList.add('cardCheckBox')
      const p4 = document.createElement('p')
      p4.innerText = 'Read'
      const checkBox = document.createElement('input')
      checkBox.setAttribute('type', 'checkbox')
      checkBox.checked = a.checked
      checkBoxDiv.append(p4, checkBox)
      const div = document.createElement('div')
      const removeButton = document.createElement('button')
      removeButton.setAttribute('type', 'button')
      removeButton.setAttribute('data-index', index)
      removeButton.classList.add('removebtn')
      removeButton.innerHTML = 'Remove Book'
      removeButton.addEventListener('click', (e) => {
        remove(index)
      })
      div.classList.add('card')
      div.setAttribute('data-index', index)
      div.append(p1, p2, p3, checkBoxDiv, removeButton)
      grid.append(div)
    })
  }

  const addButton = document.getElementById('add-button')
  addButton.addEventListener('click', () => {
    const form = document.getElementById('form')
    form.reset()
    form.classList.toggle('hidden')
  })

  const addBook = () => {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const checked = document.getElementById('checkbox').checked
    console.log(title)
    console.log(checked)
    const book = new Book(author, title, pages, checked)
    console.log(book)
    myLibrary.push(book)
  }

  const submitButton = document.getElementById('submit')
  submitButton.addEventListener('click', function (event) {
    event.preventDefault()
    addBook()
    while (grid.hasChildNodes()) {
      grid.removeChild(grid.lastChild)
    }
    createDivs()
    const form = document.getElementById('form')
    form.classList.toggle('hidden')
  })

  createDivs()
})

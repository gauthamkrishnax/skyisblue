export default function decorate(block) {
    const labelText = block.children[0].children[0].textContent
    const form = document.createElement("form")
    form.innerHTML = `
    <div class="question-answer">
    	 <label for="question">${labelText}</label>
        <textarea class="textArea" id="answer" name="answer" rows="5" cols="50"></textarea>
    </div>
    `
    block.textContent = "";
    block.append(form)
}
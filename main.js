const textInput = document.getElementById("text");
        const countSpan = document.getElementById("count");
        const countNoSpacesSpan = document.getElementById("countNoSpaces");
        const wordcount = document.getElementById("wordcount");
        const sentensecount = document.getElementById("sentensecount");

        textInput.addEventListener("input", () => {
            const text = textInput.value;

            // Character count
            const charCount = text.length;
            countSpan.innerText = charCount;

            // Character count without spaces
            const charCountNoSpaces = text.replace(/\s+/g, '').length;
            countNoSpacesSpan.innerText = charCountNoSpaces;

            // Word count
            const words = text.trim().split(/\s+/).filter(word => word.length > 0);
            const wordCount = words.length;
            wordcount.innerText = wordCount;

            // Sentence count
            const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
            const sentenceCount = sentences.length;
            sentensecount.innerText = sentenceCount;
        });
document.getElementById("text-input").addEventListener("input",function(event){
    const inpuFieldValue= event.target.value;
    const WordCount=inpuFieldValue.trim().split(/\s+/).filter(function(word){
        return word.length > 0
    }).length

    const charCount=inpuFieldValue.length;
    document.getElementById("word-count").textContent = WordCount
    document.getElementById("chr-count").textContent = charCount
    
    const twiterLimit= 200 - charCount
    const facebookLimit= 58206 -charCount
    document.getAnimations("twitter-limits").textContent =twiterLimit >= 0 ?
     twiterLimit :0
     document.getAnimations("facebook-limits").textContent = facebookLimit >= 0 ?
     facebookLimit :0
})

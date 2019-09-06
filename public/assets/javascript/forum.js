$(document).ready(function () {

    const titleInput = $("#jobTitle");
    const paymentInput = $("#paymentAmount");
    const subjectInput = $("#subjectType");
    const descriptionInput = $("#descriptionInput");
    
    const forumSubmit = (event) => {
        event.preventDefault();

        const newPost = {
            title: titleInput.val(),
            body: descriptionInput.val(),
            category: subjectInput.val(),
            payment: paymentInput.val(),
            
        };
        
        submitPost(newPost);
        console.log(newPost);
    }
    
    function submitPost(post) {
        $.post("/api/posts", post, function() {
            window.location.href = "/posts.html";
            console.log(post);
        });
    }
    
    $("#submitBtn").on("click", forumSubmit);
    
})
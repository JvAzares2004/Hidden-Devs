function CreatePost(){
  const PostURL = "";
  window.open(PostURL, '_blank');
}

function toggleFunction1() {
    const element = document.getElementById("post_icon1");
    const isDarkGray = element.style.backgroundColor === "rgb(44, 44, 44)";
  
    element.style.backgroundColor = isDarkGray ? "" : "rgb(44, 44, 44)";
    element.style.borderRadius = isDarkGray ? "" : "8px";
  }

  function toggleFunction2() {
    const element = document.getElementById("post_icon2");
    const isDarkGray = element.style.backgroundColor === "rgb(44, 44, 44)";
  
    element.style.backgroundColor = isDarkGray ? "" : "rgb(44, 44, 44)";
    element.style.borderRadius = isDarkGray ? "" : "8px";
  }
  function toggleFunction3() {
    const element = document.getElementById("post_icon3");
    const isDarkGray = element.style.backgroundColor === "rgb(44, 44, 44)";
  
    element.style.backgroundColor = isDarkGray ? "" : "rgb(44, 44, 44)";
    element.style.borderRadius = isDarkGray ? "" : "8px";
  }


function Like() {
  const likeIcon = document.getElementById("Upvote");
  const icon = likeIcon.querySelector("i");

  likeIcon.classList.toggle("liked"); // Toggle visibility and style class

  if (likeIcon.classList.contains("liked")) {
    icon.style.color = "orange"; // Set orange color when liked
  } else {
    icon.style.color = "#919191"; // Reset to original color when unliked
  }
}



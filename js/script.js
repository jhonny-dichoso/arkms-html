smoothscroll.addEventListener("click", function(event) {
  event.preventDefault();

  document.querySelector("html, body").scrollTo({
    top: 0,
    behavior: "smooth"

    //scrollTop: $( $(this).attr('href') ).offset().top
  });
});

window.addEventListener("scroll", function(event) {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".bck-top").style.display = "block";
    console.log(246);
  } else {
    document.querySelector(".bck-top").style.display = "none";
    console.log(12213123);
  }
});

$(document).ready(function() {
  // $('a#smooth-scroll').click(function(){
  //     $('html, body').animate({
  //         scrollTop: $( $(this).attr('href') ).offset().top
  //     }, 800);
  //     return false;
  // });

  // TOGGLE MOBILE MENU
  const toggleMenu = document.querySelector(".toggle-menu");
  let isOpen = false;
  toggleMenu.addEventListener("click", activeMenu);

  function activeMenu() {
    const header = document.querySelector("header");
    const nav = document.querySelector("nav");

    if (!isOpen) {
      header.style.height = "auto";
      nav.style.display = "block";
      isOpen = true;
    } else {
      header.style.height = "7.3rem";
      nav.style.display = "none";
      isOpen = false;
    }
  }

  // window.onscroll = function() {scrollFunction()};

  // function scrollFunction() {
  //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //         $('.bck-top').css("display", "block");
  //     } else {
  //         $('.bck-top').css("display", "none");
  //     }
  // }

  // ADDING MEMBERS

  $(".add").on("click", add);
  $(".remove").on("click", remove);

  function add() {
    event.preventDefault();
    var new_chq_no = parseInt($("#total_chq").val()) + 1;
    var new_input =
      "<input type='text' class='mb-1' id='new_" + new_chq_no + "' />";
    $("#new_chq").append(new_input);
    $("#total_chq").val(new_chq_no);
  }

  function remove() {
    event.preventDefault();
    var last_chq_no = $("#total_chq").val();

    if (last_chq_no > 1) {
      $("#new_" + last_chq_no).remove();
      $("#total_chq").val(last_chq_no - 1);
    }
  }

  // ADDING COLLECTION

  $(".add-collection").on("click", addCollection);
  $(".remove-collection").on("click", removeCollection);

  function addCollection() {
    event.preventDefault();
    var new_col_no = parseInt($("#total_col").val()) + 1;
    var new_col =
      "<div class='col-sm-6  col-md-3' id='new_" +
      new_col_no +
      "' ><div class='browse-card' id='total_col'><div class='imgbox'><i class='fas fa-folder-open'></i></div><div class='browse-card-content no-padding'><textarea class='filename' cols='30' rows='3' disabled>Type Collection name here. Edit to change the Collection name.</textarea><p class='text-right text-secondary options'><a href='research.html'><i class='fas fa-eye'></i></a><a href='editresearch.html' class='btnEditCollection'><i class='fas fa-edit'></i></a><a href='#' class='btnDeleteResearch'><i class='fas fa-minus-circle remove-collection'></i></a></p></div></div></div> ";
    $(new_col).insertAfter("#new_col");
    $("#total_col").val(new_col_no);
  }

  function removeCollection() {
    event.preventDefault();
    var last_col_no = $("#total_col").val();

    if (last_col_no > 1) {
      $("#new_" + last_col_no).remove();
      $("#total_col").val(last_col_no - 1);
    }
  }

  // UPLOAD PDF FILE
  document.getElementById("uploadBtnPdf").value = "";
  document.getElementById("uploadBtnPdf").onchange = function() {
    document.getElementById("uploadFilePdf").value = this.value;
  };

  // UPLOAD WORD FILE
  document.getElementById("uploadBtnWord").value = "";
  document.getElementById("uploadBtnWord").onchange = function() {
    document.getElementById("uploadFileWord").value = this.value;
  };

  // UPLOAD FEATURED IMAGE
  document.getElementById("uploadBtnFeaturedImage").value = "";
  document.getElementById("uploadBtnFeaturedImage").onchange = function() {
    document.getElementById("uploadFileFeaturedImage").value = this.value;
  };

  // //DISPLAY MESSAGEBOX
  // var btnSaveResearch = document.getElementById("btnSaveResearch");
  // // var btnEditResearch = document.getElementById("btnEditResearch");
  // var msgBox = document.getElementById("messagebox");
  // var top = document.getElementById("top");
  // var idBtnConfirmAdd = document.getElementById("idBtnConfirmAdd");
  // // var idBtnConfirmUpdate = document.getElementById("idBtnConfirmUpdate");

  // btnSaveResearch.addEventListener("click",function(event){
  // 	event.preventDefault();
  // 	msgBox.classList.remove('hide');
  //     msgBox.classList.add('show');
  //     top.scrollIntoView({ block: 'start'});
  //     top.classList.add('noscroll');
  //   });

  // idBtnConfirmAdd.addEventListener("click",function(event){
  //     event.preventDefault();
  //     msgBox.classList.remove('show');
  //     msgBox.classList.add('hide');
  //     top.classList.remove('noscroll');
  // });

  // btnEditResearch.addEventListener("click",function(event){
  // 	event.preventDefault();
  // 	msgBox.classList.remove('hide');
  //     msgBox.classList.add('show');
  //     top.scrollIntoView({ block: 'start'});
  //     top.classList.add('noscroll');
  //   });

  // idBtnConfirmUpdate.addEventListener("click",function(event){
  //     event.preventDefault();
  //     msgBox.classList.remove('show');
  //     msgBox.classList.add('hide');
  //     top.classList.remove('noscroll');
  // });
});

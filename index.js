
    function showSidebar(){
      const sidebar=document.querySelector('.sidebar')
      sidebar.style.display='flex'

    }
    function hideSidbar(){
      const sidebar=document.querySelector('.sidebar')
      sidebar.style.display='none'

    }
  let index=0;
  function  changecolor(){
    let colors=["cyan","lightblue","lightgreen","grey","purple"];
    document.getElementsByTagName('body')[0].style.background=colors[index++];
   if(index>colors.length-1){
    index=0;
   }
  }
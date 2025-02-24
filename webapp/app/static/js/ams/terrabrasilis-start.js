$(document).ready(function () {

  let toggleSideBar=()=> {
    $('#sidebar, #content').toggleClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    // no sense because when side bar has class active the return is false
    if($('#sidebar').hasClass('active')){// if open
        $('#panel_container').addClass('full-width');
    }else{//if close
        $('#panel_container').removeClass('full-width');
    }
  };
    
  $("#sidebar").mCustomScrollbar({
      theme: "minimal"
  });

  $('#sidebarCollapse, #prepare_print').on('click', toggleSideBar);

  // close side bar by default
  toggleSideBar();
  
  /** display app version on footer bar */
  let versionDiv = $('#version');
  if(versionDiv.length>0){
    // TODO: enable this code if a file with tag version is present
    $.getJSON('static/PROJECT_VERSION', function(data) {
        let version = data.version;
        versionDiv.append('<a href="https://github.com/terrabrasilis/ams/releases/tag/'+version+'" target="_blank" title="Veja este release no GitHub">'+version+'</a>');
    });
  }

  /** Translation component mock, used to start the authentication component */
  let Lang={language:"pt-br", change:(l)=>{alert("Na fila de implementação.");}};
  /**
   * When starting the authentication component, register the restartApp callback
   * to restart the webapp based on the definitions in index.html and the status
   * of the authentication chain.
   */
  Authentication.init(Lang.language, ams.Utils.restartApp);

  /** Launch the app when loading the page for the first time */
  startApp();

  /** config google analytics */
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-VF4139FH8F');

  /** Defines what to do for the window resize event */
  window.onresize=ams.Utils.onWindowResize;
});



      
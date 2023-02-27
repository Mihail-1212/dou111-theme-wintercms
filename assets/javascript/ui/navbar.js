export function navbar() {
  $(".dropdown-wrapper").each(function() {
    var $this = $(this),
      $toggleBtn = $this.find(".dropdown-toggle"),
      $dropdownContent = $this.find(".dropdown-content");

    const ACTIVE_CLASSNAME = 'dropdown-is-active',
      PARENT_CLASSNAME = 'has-children';

    $toggleBtn.on("click", function() {
      $toggleBtn.toggleClass( ACTIVE_CLASSNAME );
      $dropdownContent.toggleClass( ACTIVE_CLASSNAME );
    });

    // Second level
    $this.find(".dropdown-content").slinky({
      resize: false,
      title: false,
    }); 
  });
};
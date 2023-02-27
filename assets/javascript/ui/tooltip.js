export function tooltip() {
  var toolTipSelector = '.tooltip';
  var toolTipDarkSelector = '.tooltip-dark';

  // ToolTip
  new jBox('Tooltip', {
    attach: toolTipSelector,
    animation: 'zoomIn',
  });
  // TooltipDark
  new jBox('Tooltip', {
    attach: toolTipDarkSelector,
    animation: 'zoomIn',
    theme: 'TooltipDark'
  });
};

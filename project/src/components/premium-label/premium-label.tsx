type PremiumLabelProps = {
  cssClass: string;
};

function PremiumLabel({cssClass}: PremiumLabelProps) {
  return (
    <div className={cssClass}>
      <span>Premium</span>
    </div>
  );
}

export default PremiumLabel;

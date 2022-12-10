type PremiumLabelProps = {
  cssClass: string;
};

function PremiumLabel({cssClass}: PremiumLabelProps) {
  return (
    <div className={cssClass} data-testid="label-premium">
      <span>Premium</span>
    </div>
  );
}

export default PremiumLabel;

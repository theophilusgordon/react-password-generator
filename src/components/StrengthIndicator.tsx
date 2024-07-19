interface StrengthIndicatorProps {
    strength: number;
    strengthDescription: string;
}
const StrengthIndicator = ({ strength, strengthDescription }: StrengthIndicatorProps) => {
    const getStrengthBarClass = (index: number) => {
        const strengthClasses = ['too-weak', 'weak', 'medium', 'strong'];
        if (index <= strength) {
            return `strength-bar filled ${strengthClasses[strength]}`;
        }
        return "strength-bar";
    };

    return (
        <div className="strength">
            <p>Strength</p>
            <div className="strength-info">
                <p>{strengthDescription}</p>
                <div className="strength-bars">
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className={getStrengthBarClass(index)}></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StrengthIndicator;

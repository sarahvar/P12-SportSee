import './ToolType.css';

export const ToolType = ({ active, payload }) => {
    if (active && payload && payload.length > 0) {
        return (
            <div className="toolType-container">
                <span className="toolType-container__text">{payload[0].value}kg</span>
                <span className="toolType-container__text">{payload[1].value}kCal</span>
            </div>
        );
    } else {
        return null;
    }
};

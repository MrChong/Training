import BeatLoader from 'react-spinners/BeatLoader'

const Spinner = ({ loading }) => {
    const override = {
        display: 'block',
        margin: 'auto', // Center horizontally
        // Add vertical centering (optional)
        position: 'absolute', // Make the spinner position itself
        top: '50%', // Align the top edge with the container's center
        left: '50%', // Align the left edge with the container's center
        transform: 'translate(-50%, -50%)', // Offset to compensate for positioning
    }
    return (
        <>
            <BeatLoader
            color='#4338CA'
            loading={loading}
            cssOverride={override}
            size={50}
            />
        </>
    )
}

export default Spinner
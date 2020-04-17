
import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import styles from './HomeSlider.module.css'
import Grid from '@material-ui/core/Grid'

const AutoplaySlider = withAutoplay(AwesomeSlider);

export function HomeSlider () {
    return (
        <div className={styles.sliderContainer}>
            <AutoplaySlider
                play={true}
                cancelOnInteraction={true} // should stop playing on user interaction
                interval={5000}
                fillParent={false}
                className={styles.slider}
            >
                <div className={styles.slideContent}>2</div>
                <div>3</div>
                <div>4</div>
            </AutoplaySlider>
        </div>
    )
}

export default HomeSlider;
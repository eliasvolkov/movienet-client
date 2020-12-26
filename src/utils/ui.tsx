import facepaint from 'facepaint';
import { BREAKPOINTS } from '../constants';

export const mq = facepaint(
    BREAKPOINTS.map((bp) => `@media (min-width: ${bp}px)`),
);

export const isMobile = () => {
    if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent,
        )
    ) {
        return true;
    }
    return false;
};

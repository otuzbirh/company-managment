import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import {Box} from '@mui/material'
import { AnimatePresence } from 'framer-motion';
import generateTsParticleOptions from './particleConfig';




const FullScreenLayout = ({children}) => {
    const particlesInit = useCallback(async engine => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
      // <Box elevation={2} sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }} {...children}>

      //   <AnimatePresence  mode="wait" initial={true}>
       
      //   </AnimatePresence>
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}>

        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={generateTsParticleOptions()}
        />
           {children}
     
        </div>
     
   
    );
};

export default FullScreenLayout
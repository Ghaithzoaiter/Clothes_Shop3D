import { proxy } from 'valtio';
import mylogo from '../assets/logo.png'


const state = proxy({
  intro: true,
  color: 'rgba(41, 41, 41, 1)',
  isLogoTexture: true,
  isFullTexture: false,

  logoDecal:mylogo,
  fullDecal:mylogo,
});

export default state;
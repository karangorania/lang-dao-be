// import LangDAO from '../abi/LangDAO.json';
// import Controller from '../abi/Controller.json';
import fs from 'fs';
const Controller = fs.readFileSync('../abi/Controller.json', 'utf8');
// const LangDAO = fs.readFileSync('../abi/LangDAO.json', 'utf8');

import { default as LangDAO } from '../abi/LangDAO.json' assert { type: 'json' };

console.log(LangDAO);

export const BadgeAddress = '0x707aBe325e4D8CFc333A4A05299a6Ceb3CA7941A';
export const ControllerAddress = '0xc8e0D4D4A0b7d646333851b7Ca47de3437d46F84';
export const LangDAOAddress = '0xc2E355BcF699c124C540B61807921d8d759aF8A7';

// Badge deployed to 0x707aBe325e4D8CFc333A4A05299a6Ceb3CA7941A
// Controller deployed to 0xc8e0D4D4A0b7d646333851b7Ca47de3437d46F84
// LangDAO deployed to 0xc2E355BcF699c124C540B61807921d8d759aF8A7

export const LangDAO_ABI = LangDAO.abi;
export const ControllerABI = Controller.abi;

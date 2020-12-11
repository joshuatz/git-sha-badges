// @ts-check
const fs = require('fs');

/** @param {string} sha */
const getSvgStrings = (sha) => {
	const fancy = `
<svg version="1.1" viewBox="0.0 0.0 960.0 720.0" fill="none" stroke="none" stroke-linecap="square" stroke-miterlimit="10" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><clipPath id="p.0"><path d="m0 0l960.0 0l0 720.0l-960.0 0l0 -720.0z" clip-rule="nonzero"/></clipPath><g clip-path="url(#p.0)"><path fill="#000000" fill-opacity="0.0" d="m0 0l960.0 0l0 720.0l-960.0 0z" fill-rule="evenodd"/><path fill="#776c64" d="m498.3975 517.8349l0 0c0 -114.57083 69.10324 -207.44882 154.34647 -207.44882l0 0c40.93518 0 80.19385 21.85614 109.139404 60.760345c28.945557 38.904205 45.20703 91.66962 45.20703 146.68848l0 0c0 114.5708 -69.10327 207.44879 -154.34644 207.44879l0 0c-85.243225 0 -154.34647 -92.87799 -154.34647 -207.44879z" fill-rule="evenodd"/><path stroke="#000000" stroke-width="1.0" stroke-linejoin="round" stroke-linecap="butt" d="m498.3975 517.8349l0 0c0 -114.57083 69.10324 -207.44882 154.34647 -207.44882l0 0c40.93518 0 80.19385 21.85614 109.139404 60.760345c28.945557 38.904205 45.20703 91.66962 45.20703 146.68848l0 0c0 114.5708 -69.10327 207.44879 -154.34644 207.44879l0 0c-85.243225 0 -154.34647 -92.87799 -154.34647 -207.44879z" fill-rule="evenodd"/><path fill="#000000" fill-opacity="0.0" d="m259.8084 435.24933l0 284.75592" fill-rule="evenodd"/><path stroke="#464c53" stroke-width="16.0" stroke-linejoin="round" stroke-linecap="butt" d="m259.8084 435.24933l0 284.75592" fill-rule="evenodd"/><path fill="#7885af" d="m59.24147 239.95801l0 0c0 -107.85643 89.796875 -195.29134 200.56694 -195.29134l0 0c53.193634 0 104.20862 20.575275 141.82224 57.199505c37.613586 36.62423 58.74469 86.297356 58.74469 138.09183l0 0c0 107.856415 -89.796875 195.29132 -200.56693 195.29132l0 0c-110.770065 0 -200.56694 -87.434906 -200.56694 -195.29132z" fill-rule="evenodd"/><path stroke="#38425e" stroke-width="4.0" stroke-linejoin="round" stroke-linecap="butt" d="m59.24147 239.95801l0 0c0 -107.85643 89.796875 -195.29134 200.56694 -195.29134l0 0c53.193634 0 104.20862 20.575275 141.82224 57.199505c37.613586 36.62423 58.74469 86.297356 58.74469 138.09183l0 0c0 107.856415 -89.796875 195.29132 -200.56693 195.29132l0 0c-110.770065 0 -200.56694 -87.434906 -200.56694 -195.29132z" fill-rule="evenodd"/><path fill="#efefef" d="m353.76093 169.522l85.416016 0l0 0c11.189728 0 20.260803 31.533676 20.260803 70.43245c0 38.898758 -9.071075 70.43242 -20.260803 70.43242l-85.416016 0l0 0c-11.189728 0 -20.260803 -31.53366 -20.260803 -70.43242c0 -38.898773 9.071075 -70.43245 20.260803 -70.43245z" fill-rule="evenodd"/><path stroke="#000000" stroke-width="1.0" stroke-linejoin="round" stroke-linecap="butt" d="m353.76093 169.522l85.416016 0l0 0c11.189728 0 20.260803 31.533676 20.260803 70.43245c0 38.898758 -9.071075 70.43242 -20.260803 70.43242l-85.416016 0l0 0c-11.189728 0 -20.260803 -31.53366 -20.260803 -70.43242c0 -38.898773 9.071075 -70.43245 20.260803 -70.43245z" fill-rule="evenodd"/><path fill="#efefef" d="m81.22492 169.522l85.41604 0l0 0c11.189728 0 20.260803 31.533676 20.260803 70.43245c0 38.898758 -9.071075 70.43242 -20.260803 70.43242l-85.41604 0l0 0c-11.189728 0 -20.2608 -31.53366 -20.2608 -70.43242c0 -38.898773 9.071072 -70.43245 20.2608 -70.43245z" fill-rule="evenodd"/><path stroke="#000000" stroke-width="1.0" stroke-linejoin="round" stroke-linecap="butt" d="m81.22492 169.522l85.41604 0l0 0c11.189728 0 20.260803 31.533676 20.260803 70.43245c0 38.898758 -9.071075 70.43242 -20.260803 70.43242l-85.41604 0l0 0c-11.189728 0 -20.2608 -31.53366 -20.2608 -70.43242c0 -38.898773 9.071072 -70.43245 20.2608 -70.43245z" fill-rule="evenodd"/><path fill="#efefef" d="m84.36963 169.88925l326.77167 0l0 140.91339l-326.77167 0z" fill-rule="evenodd"/><path fill="#000000" fill-opacity="0.0" d="m82.9285 169.68279l335.46457 0" fill-rule="evenodd"/><path stroke="#000000" stroke-width="1.0" stroke-linejoin="round" stroke-linecap="butt" d="m82.9285 169.68279l335.46457 0" fill-rule="evenodd"/><path fill="#000000" fill-opacity="0.0" d="m82.9285 310.44183l335.46457 0" fill-rule="evenodd"/><path stroke="#000000" stroke-width="1.0" stroke-linejoin="round" stroke-linecap="butt" d="m82.9285 310.44183l335.46457 0" fill-rule="evenodd"/><path fill="#000000" fill-opacity="0.0" d="m765.82416 297.91602l0 193.00787" fill-rule="evenodd"/><path stroke="#434343" stroke-width="8.0" stroke-linejoin="round" stroke-linecap="butt" d="m765.82416 297.91602l0 193.00787" fill-rule="evenodd"/><path fill="#51435d" d="m669.5722 335.37796l0 -39.77954l0 0c0 -21.969635 43.093445 -39.779526 96.25195 -39.779526c53.15851 0 96.25195 17.80989 96.25195 39.779526l0 39.77954z" fill-rule="evenodd"/><path stroke="#000000" stroke-width="1.0" stroke-linejoin="round" stroke-linecap="butt" d="m669.5722 335.37796l0 -39.77954l0 0c0 -21.969635 43.093445 -39.779526 96.25195 -39.779526c53.15851 0 96.25195 17.80989 96.25195 39.779526l0 39.77954z" fill-rule="evenodd"/><path fill="#000000" fill-opacity="0.0" d="m382.77698 604.4309l1.2913513 115.55902" fill-rule="evenodd"/><path stroke="#cc8c60" stroke-width="8.0" stroke-linejoin="round" stroke-linecap="butt" d="m382.77698 604.4309l1.2913513 115.55902" fill-rule="evenodd"/><path fill="#cc4f61" d="m318.054 564.6407l99.713715 -27.632202l0 0c7.109009 -1.9700317 14.709961 -1.0354614 21.130768 2.5980835c6.420807 3.633545 11.135498 9.668457 13.106842 16.7771l7.433075 26.8031c2.1362305E-4 7.324219E-4 -2.1362305E-4 0.0014648438 -9.1552734E-4 0.0016479492l-153.3219 42.486572l0 0c-7.019043E-4 1.8310547E-4 -0.0014343262 -2.4414062E-4 -0.0016479492 -9.1552734E-4l-7.431427 -26.802246l0 0c-4.1051636 -14.8029785 4.567749 -30.128784 19.37149 -34.23114z" fill-rule="evenodd"/><path stroke="#000000" stroke-width="1.0" stroke-linejoin="round" stroke-linecap="butt" d="m318.054 564.6407l99.713715 -27.632202l0 0c7.109009 -1.9700317 14.709961 -1.0354614 21.130768 2.5980835c6.420807 3.633545 11.135498 9.668457 13.106842 16.7771l7.433075 26.8031c2.1362305E-4 7.324219E-4 -2.1362305E-4 0.0014648438 -9.1552734E-4 0.0016479492l-153.3219 42.486572l0 0c-7.019043E-4 1.8310547E-4 -0.0014343262 -2.4414062E-4 -0.0016479492 -9.1552734E-4l-7.431427 -26.802246l0 0c-4.1051636 -14.8029785 4.567749 -30.128784 19.37149 -34.23114z" fill-rule="evenodd"/><path fill="#000000" fill-opacity="0.0" d="m765.96063 484.75067c-0.2642212 7.971985 0.34558105 36.69336 -1.5853271 47.83203c-1.9308472 11.138672 -5.916443 16.749756 -10.0 19.0c-4.083557 2.250183 -11.584412 0.16796875 -14.501282 -5.4987183c-2.91687 -5.666687 -2.5 -23.751099 -3.0 -28.501282" fill-rule="evenodd"/><path stroke="#434343" stroke-width="8.0" stroke-linejoin="round" stroke-linecap="butt" d="m765.96063 484.75067c-0.2642212 7.971985 0.34558105 36.69336 -1.5853271 47.83203c-1.9308472 11.138672 -5.916443 16.749756 -10.0 19.0c-4.083557 2.250183 -11.584412 0.16796875 -14.501282 -5.4987183c-2.91687 -5.666687 -2.5 -23.751099 -3.0 -28.501282" fill-rule="evenodd"/></g>
<text x="90" y="264" style="font-size: 80px;fill: black;font-family: monospace;">${sha}</text>
</svg>
`;
	const simple = `
<svg version="1.1" viewBox="0.0 0.0 571.6036745406824 214.3517060367454" fill="none" stroke="none" stroke-linecap="square" stroke-miterlimit="10" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><clipPath id="p.0"><path d="m0 0l571.6037 0l0 214.3517l-571.6037 0l0 -214.3517z" clip-rule="nonzero"/></clipPath><g clip-path="url(#p.0)"><path fill="#000000" fill-opacity="0.0" d="m0 0l571.6037 0l0 214.3517l-571.6037 0z" fill-rule="evenodd"/><g filter="url(#shadowFilter-p.1)"><use xlink:href="#p.1" transform="matrix(1.0 0.0 0.0 1.0 0.0 2.0)"/></g><defs><filter id="shadowFilter-p.1" filterUnits="userSpaceOnUse"><feGaussianBlur in="SourceAlpha" stdDeviation="11.0" result="blur"/><feComponentTransfer in="blur" color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0" intercept="0.0"/><feFuncG type="linear" slope="0" intercept="0.0"/><feFuncB type="linear" slope="0" intercept="0.0"/><feFuncA type="linear" slope="0.5" intercept="0"/></feComponentTransfer></filter></defs><g id="p.1"><path fill="#cfe2f3" d="m31.156128 61.241886l0 0c0 -11.538776 9.354031 -20.892803 20.892807 -20.892803l467.50574 0c5.5410767 0 10.855286 2.2011986 14.7734375 6.119358c3.9181519 3.9181633 6.1193237 9.23233 6.1193237 14.773445l0 83.568726c0 11.538773 -9.354004 20.892807 -20.892761 20.892807l-467.50574 0c-11.538776 0 -20.892807 -9.354034 -20.892807 -20.892807z" fill-rule="evenodd"/><path stroke="#000000" stroke-width="1.0" stroke-linejoin="round" stroke-linecap="butt" d="m31.156128 61.241886l0 0c0 -11.538776 9.354031 -20.892803 20.892807 -20.892803l467.50574 0c5.5410767 0 10.855286 2.2011986 14.7734375 6.119358c3.9181519 3.9181633 6.1193237 9.23233 6.1193237 14.773445l0 83.568726c0 11.538773 -9.354004 20.892807 -20.892761 20.892807l-467.50574 0c-11.538776 0 -20.892807 -9.354034 -20.892807 -20.892807z" fill-rule="evenodd"/></g><path fill="#a4c2f4" d="m31.01046 144.63329l0 -83.21408l0 0c0 -5.550556 2.2049484 -10.873772 6.1297836 -14.798607c3.9248352 -3.9248352 9.2480545 -6.1297836 14.798607 -6.1297836l96.898384 0c5.79834E-4 0 0.0010375977 4.6539307E-4 0.0010375977 0.0010414124l-0.0010375977 125.069824l0 0c0 5.79834E-4 -4.7302246E-4 0.0010528564 -0.0010375977 0.0010528564l-96.89735 -0.0010528564l0 0c-11.55843 0 -20.92839 -9.369949 -20.92839 -20.92839z" fill-rule="evenodd"/><path stroke="#000000" stroke-width="1.0" stroke-linejoin="round" stroke-linecap="butt" d="m31.01046 144.63329l0 -83.21408l0 0c0 -5.550556 2.2049484 -10.873772 6.1297836 -14.798607c3.9248352 -3.9248352 9.2480545 -6.1297836 14.798607 -6.1297836l96.898384 0c5.79834E-4 0 0.0010375977 4.6539307E-4 0.0010375977 0.0010414124l-0.0010375977 125.069824l0 0c0 5.79834E-4 -4.7302246E-4 0.0010528564 -0.0010375977 0.0010528564l-96.89735 -0.0010528564l0 0c-11.55843 0 -20.92839 -9.369949 -20.92839 -20.92839z" fill-rule="evenodd"/></g>
<text x="40" y="126" style="font-size: 74px; fill: black;">🚀</text>
<text x="160" y="126" style="font-size: 61px;fill: black;">SHA: ${sha}</text>
</svg>	
`;
	return {
		fancy,
		simple
	};
};

// Retrieve SHA from JSON, insert into SVG string, and save as file
/** @type {{sha: string}} */
const buildInfo = require('./build-info.json');
const compiledBadges = getSvgStrings(buildInfo.sha);
fs.writeFileSync('./badge-fancy.svg', compiledBadges.fancy);
fs.writeFileSync('./badge-simple.svg', compiledBadges.simple);
process.exit(0);

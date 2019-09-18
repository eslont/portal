// Reset = '\x1b[0m'
// Bright = '\x1b[1m'
// Dim = '\x1b[2m'
// Underscore = '\x1b[4m'
// Reverse = '\x1b[7m'
// Hidden = '\x1b[8m'

// FgBlack = '\x1b[30m'
// FgRed = '\x1b[31m'
// FgGreen = '\x1b[32m'
// FgYellow = '\x1b[33m'
// FgBlue = '\x1b[34m'
// FgMagenta = '\x1b[35m'
// FgCyan = '\x1b[36m'
// FgWhite = '\x1b[37m'

// BgBlack = '\x1b[40m'
// BgRed = '\x1b[41m'
// BgGreen = '\x1b[42m'
// BgYellow = '\x1b[43m'
// BgBlue = '\x1b[44m'
// BgMagenta = '\x1b[45m'
// BgCyan = '\x1b[46m'
// BgWhite = '\x1b[47m'

const toYellow = (string) => {
	return `\x1b[33m ${string} \x1b[0m`
}

const toWhite = (string) => {
	return `\x1b[37m ${string} \x1b[0m`
}

const toTitle = (string) => {
	return `\x1b[31m\x1b[4m\x1b[1m ${string} \x1b[0m`
}



const info = () => {
		const line = `\n\x1b[36m#################################################################################\x1b[0m\n`;
		console.log(
		`${line}`,
		`\n${toYellow('In the root of Assemble, run the following commands..')}`,
		`\n\n ${toTitle('Development Build:')}`,
		`\n\n   ${toWhite('gulp ---{projectDirectoryName}')}`,
		`\n\n\n ${toTitle('Production Build:')}`,
		`\n\n   ${toWhite('gulp build ---{projectDirectoryName}')}`,
		`\n\n\n ${toTitle('Optional Parameters:')}`,
		`\n\n   ${toWhite('--ejs')}`,`${toYellow('- run it once when create a new project to enable ejs preprocessor!')}`,
		`\n\n   ${toWhite('--notvalid')}`,`${toYellow('- to unable HTML validation')}\n`,
		`${line}`
		);
		return process.exit();
}

module.exports = info;
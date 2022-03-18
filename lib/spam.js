const fs = require('fs-extra')

// check(10).then((res) => console.log(res))
// into(10).then((res) => console.log(res))

module.exports = { check, into, send, sleep } 
async function check(message) {
	
	var count = 0
	for (let i = 0; i < spamarr.length; i++) {
		if (spamarr[i] == message.author) {
			count++
		} 
	}
	return count
}


async function into(message, color, isBotGroupAdmins) {

		const no = await check(message)
		if (no > 7) return await send(message, isBotGroupAdmins)
		spamarr.push(message.author)
		// console.log(spamarr)
		let inx = spamarr.indexOf(message.author)
		await sleep(5000)
		spamarr.splice(inx, 1)
		return spamarr
}

async function send(message, isBotGroupAdmins) {
	
	const memberList = await sclient.getGroupMembersId(message.from)
	if (memberList.includes(message.author) && isBotGroupAdmins) {	
		await sclient.sendText(message.from, '❌️ *SPAM DETECTED! REMOVING...*')
		await sclient.removeParticipant(message.from, message.author)
	}

}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



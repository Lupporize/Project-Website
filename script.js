const accessToken = 'ya29.c.c0ASRK0GabVqf8YKbLXNcB7qHi3aKfW53Ig9h7Lno6IoLTRasY5MAH8UDmK03-hUnKH5BrJsX8_9HeIcBb0JfDWs4D-5rGuseViDltgPn0c-MLfhvuGBSqbcoViNmi8SflEVhXAkw-qmQtbshjCLHGjW5S733MahMhmsY5oWcseyPHKenVoeUBot1iY6LKe2pa44kXAnCA4u_EVFFO5QQn-uwB2svwBFJjOeVqLJ9_yR2_5YjoI3Hi28QLPB9vNSWckdQC-O11T4DI_ALHvUM4nYRRl9ic-qYFRgTE_gVfxul6lLsyCyc_IMWCDzvZ4nLgKUGggSVo_MfWimFATwHVa5OleM3rGotRSTFe4Wc0h2gtvYNbiIkWXwclSAN387CZxzxtm3lwjxz6U_ycY4BuIk3o23JVw1z_qM09i3JFqpaQoa2915tqnegfM8ou0gw_1bJhS334fYe-3VivyV-fB9nMIU_kgOy8x0ra4J4-wgX8srqJaJJzdmVgyZiwIdRJ4bQydZZsxaWm5QUXeMj1czloeF2152U50rS947-n0Bnnd4U5wUjeXscyYcJbe-_ihrW5QU00bmlJadeYmS7Xoj77v4ivIp8gmZ4RFQv28hu05J_gFvejrX-8fbBch5z2OMRMhSzbvgzcfdqusZ0R_q3lJqr_prMoymxReFcczodZV9qR05-6neeY8On7VsziSj2pI--Ztt5RJjWUvS0uVzasuUu-Y41awXV8q6w3pXj-tBXOW56s3vis035k19zwXy9Ijed-SBf_eZyye1l8B7nM48mrqrI0yQcztwwwaRJOnRWnItIViSkaQ0qIxUfrIjUmh5iUhqzi4VQ776-5_vwv2M2WfjrqoUqeZo004h3uBXwUOq74VMwkrjBuVdOm0JupWjxzupWQmVoXJVsO79vcaof_0ug4kiU1U7hbtIaU7wFbamv_qtBjyrJ46sSxx4waBxqWsXisbxyumuV6oQ5zaIXiti23x-7o1WqsnZao0ut4oexR8tR'; // Ganti dengan Access Token dari Dialogflow
const projectId = 'luppopipo_yuvr'; // Ganti dengan ID proyek Dialogflow

// Generate session ID secara acak
const sessionId = Math.random().toString(36).substring(7);

async function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    if (!userInput) return;

    // Tambahkan input pengguna ke chat-box
    const chatBox = document.getElementById('chatbox');
    chatBox.innerHTML += `<div>Kamu: ${userInput}</div>`;

    // Kirim pesan ke Dialogflow
    try {
        const response = await fetch(`https://dialogflow.googleapis.com/v2/projects/${projectId}/agent/sessions/${sessionId}:detectIntent`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                queryInput: {
                    text: {
                        text: userInput,
                        languageCode: 'id'
                    }
                }
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data); // Log the response data for debugging
        const botReply = data.queryResult?.fulfillmentText || 'Maaf, terjadi kesalahan.';

        // Tambahkan balasan bot ke chat-box
        chatBox.innerHTML += `<div>Bot: ${botReply}</div>`;
    } catch (error) {
        chatBox.innerHTML += `<div>Bot: Maaf, terjadi kesalahan.</div>`;
        console.error('Error:', error);
    }

    // Bersihkan input setelah mengirim pesan
    document.getElementById('userInput').value = '';
}

// Tambahkan event listener untuk enter
document.getElementById("userInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
    }
});
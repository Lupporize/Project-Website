async function sendMessage() {
    let userMessage = document.getElementById("userInput").value;
    document.getElementById("chatbox").innerHTML += `<p>Kamu: ${userMessage}</p>`;
    
    try {
        let response = await fetch(
            "https://dialogflow.googleapis.com/v2/projects/luppopipo-yuvr/agent/sessions/12345:detectIntent",
            {
                method: "POST",
                headers: {
                    "Authorization": "Bearer ya29.c.c0ASRK0Ga7hrw7JCLZAWuf0NJHSTPPpZmw_bNxl0pcFM6DmdCwTGkYVdD91RVufIIqLTHuQGFrzRuSiTNkNocqHbhvcch7UNOoNr2bJpzTLDrlA7p0u4tErezNLcuc5e-2r1csJgjh7NIqOWsxT2NggqdFZvgUo7vP-IlIRYrXIb36nH5ccM-2Yvg8oBnnRMv_ucwPFvpGHjUlRE8C2pHRaDUasXZhUg05gNeIE5x7BCY7bnWRAmM9wFJU50w_rRsgdhwImwfx_92jK7esm-paTJmHrG0sI9Izgdq8gR2Y66B42ZN7Sdmn9uux4PPAMC-hK9WP93uKPXdl9U1QjXfORZXdVMzBQgafaK3M_hF4KjuIdH3QHPubNtYG384C0zZYVoIbeB-okaJdJ3kyJBn-Rk91MnIdsdvzFmq5mUc0tfY2tvtQ0wSrlB4SxOqRzhYtrF-833o-cWtcZkRj1f2y3RqYkosJuguZy1cl1OIdR8qsqIhdFf6QofdmReYtIM57qylwv7nMeYQR_ujeoZw2FZIBVnQOadYa18VfJj2Wgnozt4yQfVv21FnMp-re_31YtJO1eudBhXqV82Xc4Q_4wO85wO1JU7ani3rcQfx3FkeRgv4Zj2bsyXuyggtzdI4ZWnUkkoYkBU_-27gJZ5lmWB4Qlcm0X7w1_X1YSJqz3XqQXIR0MOVVFqzBoSrWBgudUud2YSzd69ds9w4XW7fX016jovOIvqdbYt9rdbz35rlY7fYX9aXVv1QSIUkmZe7F0VWZFY-Sfxq47I-pm5qWyawy_9ZuQF9tMqiZVMkeOJQJkn128BjQ5jpcl6FOa-I_WosxOkhjlhM81nX7b897RVnS058oZxr3wm_97_gZaX_jvnntFyZ-b3rM2SR-WI7YOXI_cR95kIIqZ3jzY6koele2pVZwolmfvZF8xJ5SU86WJBvV2hxY9zR71Sr4jp3VOa9x_S5rnZXe19FjSXaYyW-qVqvrmwWVa45Sp9kpWxm4SYjdlB9_nnq",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    queryInput: {
                        text: {
                            text: userMessage,
                            languageCode: "id",
                        },
                    },
                }),
            }
        );

        let result = await response.json();
        document.getElementById("chatbox").innerHTML += `<p>Bot: ${result.queryResult.fulfillmentText}</p>`;
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("chatbox").innerHTML += `<p>Bot: Maaf, terjadi kesalahan.</p>`;
    }
}
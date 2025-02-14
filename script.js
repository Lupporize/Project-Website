async function sendMessage() {
    let userMessage = document.getElementById("userInput").value;
    document.getElementById("chatbox").innerHTML += <p>Kamu: ${userMessage}</p>;
    
    let response = await fetch(
        "https://dialogflow.googleapis.com/v2/projects/luppopipo-yuvr/agent/sessions/12345:detectIntent",
        {
            method: "POST",
            headers: {
                "Authorization": "Bearer ya29.c.c0ASRK0Gb9DHNHY1HGpyUOuNQLPN9jTu6OcLqON56VnmnjQ54pGZAn_qlXLolNIo4YPm7GYoF-4rfBU73U1zaa96ps6TEY-5pjXmZZNftAL_W1BdP5p3GEESn2wTwFE5yI6d3NzXq-4l4m90mYF-PinC8vky4dzNObU84c6I67LL9JWg84rWOpKO2LLJRPcWucr2UvurNsR7UHfweziz6l3UIjCGfqZOajAoqlXolBQd0eYmVn0t2xsWbp0Hq9xxiuOjhmTbHiFSsJXiTBNyCK_TjxYj2Q8AnzHWnWEnRWAr2Qn4g9aBTBMha_jSz1EJzXhhx-MKVevDDy_zTKspz3ob5p5g9b5Z_9D5io6Dqn2YwQHXTyoszevaT8L385D1V7t9rfoth0cIsadg683RnOjpXtb4M4O_ol8gg6W_XOR0xv9eRXqnjjkV9oZl5cFsRSiooX3UksW4SuBnRpg6lZouM8ojv5RMlvaqOf6yzUuOdo6z14yobl7IsYbuiuWfqbkdShhf7eR_myxk0xcFOYWin2y34nhbtY-9Wt035eS6J2gh5koa0Mhal7VseJ86rUMpYJp6063JQh4rXyU-34pSQaBa25U2FmdkpSqwecoomUMdj1ju7p4zWpr1ddMuVvb2BBnOZwy2dk98dtjM5popZmh9dBaIjQolFF_w7wb5tkVZ9z-y9efrtfkQV8-nrfvxhf1YlOfp7Bv_iXuvX-0n0MbqurtXsZj6fz_YqBfwfZg7v1arentiVBibo7wJF_gF7Sd8WopJW9m7R2gluZz5QYd97c7zsfpr660lqMlhMivmSf7vQcO8ysf9r9UOYIr-l_de2Ooqc-v_Ou6i4oXdke27VJVfaJJqBRgJt209V2fxgRtjsk8ihybk8m6r-jWZMMJoynfq-lW8086x96otJpjIXf5afMF8evqnSXycIXctcWJumIZ39R1MwxM44Mxl48bl1U_h0qQBVhg9ijo198lfy-q_xnpaevoM1320QB9kq-zwq-fIJ",
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
    document.getElementById("chatbox").innerHTML += <p>Bot: ${result.queryResult.fulfillmentText}</p>;
}
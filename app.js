const assessmentForm = document.getElementById("assessmentForm");
const successMessage = document.getElementById("successMessage");

const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/ABC123.../exec";


if (assessmentForm) {

    assessmentForm.addEventListener("submit", async function(event) {

        event.preventDefault();

        const submitButton =
            assessmentForm.querySelector("button[type='submit']");

        submitButton.disabled = true;
        submitButton.textContent = "Ergaa jira...";

        const questions =
            assessmentForm.querySelectorAll(".question");

        const data = {

            q1: questions[0].querySelector("select")?.value || "",

            q2: questions[1].querySelector("select")?.value || "",

            q3: questions[2].querySelector("select")?.value || "",

            q4: questions[3].querySelector("select")?.value || "",

            q5: questions[4].querySelector("textarea")?.value || "",

            q6: Array.from(
                questions[5].querySelectorAll(
                    "input[type='checkbox']:checked"
                )
            )
            .map(input => input.parentElement.innerText.trim())
            .join(", "),

            q7: questions[6].querySelector("textarea")?.value || "",

            q8: questions[7].querySelector("select")?.value || "",

            q9: questions[8].querySelector("select")?.value || "",

            q10: questions[9].querySelector("select")?.value || "",

            q11: questions[10].querySelector("select")?.value || "",

            q12:
                questions[11].querySelector(
                    "input[type='radio']:checked"
                )?.parentElement.innerText.trim() || "",

            q13:
                questions[12].querySelector(
                    "input[type='radio']:checked"
                )?.parentElement.innerText.trim() || "",

            q14: questions[13].querySelector("textarea")?.value || "",

            q15: questions[14].querySelector("textarea")?.value || "",

            q16: questions[15].querySelector("textarea")?.value || "",

            q17: questions[16].querySelector("input")?.value || "",

            q18: questions[17].querySelector("input")?.value || "",

            q19: questions[18].querySelector("input")?.value || "",

            q20: questions[19].querySelector("input")?.value || "",

            q21: questions[20].querySelector("input")?.value || "",

            q22: questions[21].querySelector("textarea")?.value || ""
        };


        try {

            await fetch(GOOGLE_SCRIPT_URL, {

                method: "POST",

                mode: "no-cors",

                headers: {
                    "Content-Type": "text/plain;charset=utf-8"
                },

                body: JSON.stringify(data)

            });


            successMessage.textContent =
                "✅ Assessment keessan milkaa'inaan ergameera. Galatoomaa!";

            successMessage.style.background = "#e8f7ec";
            successMessage.style.color = "#08752f";
            successMessage.style.padding = "15px";
            successMessage.style.borderRadius = "10px";
            successMessage.style.textAlign = "center";

            assessmentForm.reset();

            submitButton.disabled = false;
            submitButton.textContent = "Submit Assessment";


        } catch (error) {

            console.error(error);

            successMessage.textContent =
                "❌ Rakkoon uumame. Mee irra deebi'aa.";

            successMessage.style.background = "#fdecec";
            successMessage.style.color = "#b42318";
            successMessage.style.padding = "15px";
            successMessage.style.borderRadius = "10px";
            successMessage.style.textAlign = "center";

            submitButton.disabled = false;
            submitButton.textContent = "Submit Assessment";
        }

    });

}
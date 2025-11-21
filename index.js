import { addBalance, loadBalance } from "./firebase.js";

// AdsGram init
const AdController = window.Adsgram.init({
  blockId: "int-17980"   // 🔴 Bu yerga AdsGram blockId yozing
});

document.getElementById("showAdBtn").addEventListener("click", () => {

  AdController.show()
    .then(result => {

      if (result.done && !result.error) {
        addBalance(0.02);   // 2 tiyin qo‘shish
        alert("💰 0.02 RUB qo‘shildi!");
      } else {
        alert("Reklama oxiriga yetkazilmadi!");
      }

    })
    .catch(err => {
      console.log("Ad error:", err);
    });

});

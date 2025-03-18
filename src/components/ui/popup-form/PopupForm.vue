<template>
  <div class="popup-wrapper">
    <div class="overlay-popup" @click="handleClose"></div>

    <!-- Оборачиваем форму в контейнер с ref для анимации -->
    <div ref="formContainer" class="subscribe line popup flex flex-col text-center md:text-start gap-4 items-center rounded-md bg-nj-card my-10 mt-0 relative w-[30%] mx-auto">
      <!-- Иконка закрытия -->
      <span
        class="cursor-pointer icon icon-close btn btn-circle absolute right-[-22px] top-[-24px]"
        @click="handleClose"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" stroke-dasharray="16" stroke-dashoffset="16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M7 7l10 10">
              <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="16;0"/>
            </path>
            <path d="M17 7l-10 10">
              <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="16;0"/>
            </path>
          </g>
        </svg>
      </span>

      <div class="subscribe-form-wrapper flex flex-col gap-2 pb-4">
        <h2 class="fs-25 font-bold text-nj-white py-[10px]">Подписаться</h2>
        <!-- Поле ввода email -->
        <label class="relative subscribe-form-label flex items-center justify-center">
          <input
            v-model="email"
            type="text"
            placeholder="Email"
            class="w-full bg-nj-card input-info py-3 pl-12 pr-2 rounded-lg"
          />
          <span class="absolute left-2 icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 4.99L4 6zm0 12H4V8l8 5l8-5z"/>
            </svg>
          </span>
        </label>

        <!-- Если письмо отправлено успешно, появляется поле ввода кода -->
        <label v-if="emailSent" class="relative subscribe-form-label flex items-center justify-center">
          <input
            v-model="code"
            type="text"
            placeholder="Code"
            class="w-full bg-nj-card input-info py-3 pl-12 pr-2 rounded-lg"
          />
          <span class="absolute left-2 icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <path fill="#fff" d="M6 22q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1t3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.587 1.413T18 22zm0-2h12V10H6zm6-3q.825 0 1.413-.587T14 15t-.587-1.412T12 13t-1.412.588T10 15t.588 1.413T12 17M9 8h6V6q0-1.25-.875-2.125T12 3t-2.125.875T9 6z"/>
            </svg>
          </span>
        </label>

        <!-- Кнопки: если письмо ещё не отправлено, кнопка для отправки;
             если отправлено — кнопка для проверки кода -->
        <div>
          <button
            v-if="!emailSent"
            class="btn btn-nj-primary fs-16 text-white cursor-pointer w-full"
            @click="subscribe"
          >
            Подписаться
          </button>
          <button
            v-else
            class="btn btn-nj-primary fs-16 text-white cursor-pointer w-full"
            @click="verifyCode"
          >
            Проверить код
          </button>
        </div>
      </div>

      <div class="form-control">
        <label class="cursor-pointer flex gap-4 label">
          <input type="checkbox" checked="checked" class="checkbox checkbox-info" />
          <span class="label-text">
            Мне не менее 19 лет, и я могу легально играть в казино.
          </span>
        </label>
      </div>

      <!-- Вывод сообщения с динамическими классами -->
      <div v-if="message" class="message mt-2" 
      :class="messageClass"
      >
      {{ message }}
</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { defineEmits } from 'vue';
import { sendFeedbackEmail } from '@/services/feedbackService.js';

const emit = defineEmits(["close"]);

// Переменные для хранения email, введённого кода и сгенерированного кода
const email = ref('');
const code = ref('');
const generatedCode = ref('');

// Для сообщений и статуса проверки кода
const message = ref('');
// Флаг: если письмо отправлено, показываем поле ввода кода
const emailSent = ref(false);
// Флаг: если код проверен верно
const codeVerified = ref(false);
const verificationAttempted = ref(false);

// ref для контейнера формы (для анимации shake)
const formContainer = ref(null);

// Функция проверки email по регулярному выражению
const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const handleClose = () => {
  emit("close");
};

const triggerShake = () => {
  if (formContainer.value) {
    formContainer.value.classList.add('shake');
    setTimeout(() => {
      formContainer.value.classList.remove('shake');
    }, 500);
  }
};

const subscribe = async () => {
  if (!email.value || !validateEmail(email.value)) {
    message.value = 'Пожалуйста, введите корректный email.';
    codeVerified.value = false;
    triggerShake();
    return;
  }
  try {
    const result = await sendFeedbackEmail(email.value);
    message.value = 'Письмо успешно отправлено! Введите полученный код.';
    emailSent.value = true;
    // Сохраняем сгенерированный код, который пришёл с сервера
    generatedCode.value = result.code;
  } catch (error) {
    console.error('Ошибка при отправке email:', error);
    message.value = 'Ошибка при отправке письма. Попробуйте позже.';
    codeVerified.value = false;
    triggerShake();
  }
};

const verifyCode = () => {
  verificationAttempted.value = true;
  if (code.value === generatedCode.value) {
    message.value = 'Код верный! Подписка подтверждена.';
    codeVerified.value = true;
    handleClose();
  } else {
    message.value = 'Неверный код. Попробуйте ещё раз.';
    codeVerified.value = false;
    triggerShake();
  }
};
const messageClass = computed(() => {
  if (verificationAttempted.value) {
    return codeVerified.value ? 'text-success' : 'text-error';
  } else {
    // Если попытка проверки ещё не проводилась, то если письмо отправлено – считаем, что всё хорошо (зелёный), иначе – ошибка.
    return emailSent.value ? 'text-success' : 'text-error';
  }
});
</script>

<style lang="scss" scoped>
.popup {
  display: block;
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000;
}
.subscribe {
  padding: 20px 50px;
  max-width: 450px;
  width: 100%;
}
.overlay-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(9, 15, 30, 0.8);
  z-index: 9999;
  backdrop-filter: blur(2px);
}
.popup .icon-close {
  position: absolute;
  top: -11.5px;
  right: -11.5px;
  cursor: pointer;
  min-height: 2rem;
  height: 2rem;
  width: 2rem;
  backdrop-filter: blur(5px);
  transition: 0.3s ease-in-out;
}
.popup .icon-close:active,
.popup .icon-close:focus {
  rotate: 90deg;
  transition: 0.3s ease-in-out;
}
@media screen and (max-width: 768px) {
  .popup {
    width: 90%;
    max-height: 50dvh;
  }
}
.message {
  font-size: 1rem;
}

/* Анимация shake */
@keyframes shake {
  0% { transform: translate(-50%, -50%) translateX(0); }
  20% { transform: translate(-50%, -50%) translateX(-10px); }
  40% { transform: translate(-50%, -50%) translateX(10px); }
  60% { transform: translate(-50%, -50%) translateX(-10px); }
  80% { transform: translate(-50%, -50%) translateX(10px); }
  100% { transform: translate(-50%, -50%) translateX(0); }
}
.shake {
  animation: shake 0.5s;
}
</style>
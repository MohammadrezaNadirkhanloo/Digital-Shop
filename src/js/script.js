import { data } from "./data.js";

data.map((item) => {
  const html = `
    <div class="bg-gray-50 p-2 rounded-xl shadow-xl flex flex-col">
    <div x-data="{show : false}" class="bg-zinc-200 rounded-lg shadow-md relative">
      <div class="flex justify-center">
        <img src="${item.Image}" class="w-17 h-28" alt="" />
      </div>
      <button
      @click="show = !show"
        class="absolute rounded-full m-1.5 active:bg-zinc-400/90 top-0 right-0 p-1 bg-zinc-300 hover:bg-zinc-400 md:p-2.5"
      >
        <svg
        x-show="show === false"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-3 h-3 md:w-5 md:h-5 text-orange-500"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
        <svg
        x-show="show"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-3 h-3 md:w-5 md:h-5 text-orange-500"
        >
          <path
            d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"
          />
        </svg>
      </button>
    </div>
    <div class="py-1 px-2 h-full flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between">
          <p class="text-xs text-gray-400 md:text-base">اپل</p>
          <div x-data="{ color: 'red' }" class="flex items-center">
            <div
              @click="color ='orenge'"
              :class="color==='orenge' ? 'ring-1 ring-orange-600 ':''"
              class="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 flex items-center justify-center bg-orange-500 rounded-full cursor-pointer border -mr-0.5"
            >
              <svg
                x-show="color==='orenge'"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-200"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div
              @click="color='red'"
              :class="color==='red'? 'ring-1 ring-red-600':''"
              class="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 flex items-center justify-center bg-red-500 rounded-full cursor-pointer border -mr-0.5"
            >
              <svg
                x-show="color==='red'"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-200"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>

            <div
              @click="color='blue'"
              :class="color==='blue'? 'ring-1 ring-blue-600':''"
              class="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 flex items-center justify-center bg-blue-500 rounded-full cursor-pointer border -mr-0.5"
            >
              <svg
                x-show="color==='blue'"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-200"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>

            <div
              @click="color='violet'"
              :class="color==='violet'? 'ring-1 ring-violet-600':''"
              class="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 flex items-center justify-center bg-violet-500 rounded-full cursor-pointer border -mr-0.5"
            >
              <svg
                x-show="color==='violet'"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-200"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>

            <div
              @click="color='green'"
              :class="color==='green'? 'ring-1 ring-green-600':''"
              class="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 flex items-center justify-center bg-green-500 rounded-full cursor-pointer border -mr-0.5"
            >
              <svg
                x-show="color==='green'"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-200"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        <div class="space-y-1 mt-2">
          <p class="text-xs font-semibold md:text-base">
            ${item.title}<span class="font-serif">${item.model}</span>
          </p>
          <p
            class="font-serif text-end text-red-600 text-sm md:text-base"
          >
            ${item.price} تومان
          </p>
        </div>
      </div>
      <div class="space-y-2">
        <hr />
        <div class="text-center">
          <button
            class="text-min font-medium text-orange-500 active:bg-orange-200 p-2 rounded-lg hover:bg-orange-100 lg:text-base lg:px-5"
          >
            مشاهده و سفارش
          </button>
        </div>
      </div>
    </div>
  </div>
    `;
  document.querySelector("#data").insertAdjacentHTML("beforeend",html);
});

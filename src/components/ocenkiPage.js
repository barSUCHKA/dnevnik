import { useState, useEffect } from "react";

export const OcenkiPage = () => {
  return (
    <>
      <header>
        <div className="lichniy-kabinet">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="84"
            viewBox="0 0 54 84"
            fill="none"
            className="chel-icon"
          >
            <circle cx="26.5" cy="13.5" r="13.5" fill="#D9D9D9" />
            <path
              d="M54 57C54 49.8392 51.1554 42.9716 46.0919 37.9081C41.0284 32.8446 34.1608 30 27 30C19.8392 30 12.9716 32.8446 7.90812 37.9081C2.84464 42.9716 1.08126e-06 49.8392 0 57L27 57H54Z"
              fill="#D9D9D9"
            />
          </svg>
          <p className="name-login">Name login</p>
        </div>
        <div
          className="el-dnevnik-title"
          onClick={() => {
            window.location.assign("main");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 75 75"
            fill="none"
            className="logo"
          >
            <path
              d="M50 50C50 63.8071 38.8071 75 25 75C11.1929 75 0 63.8071 0 50C0 36.1929 11.1929 25 25 25C38.8071 25 50 36.1929 50 50ZM3.75 50C3.75 61.736 13.2639 71.25 25 71.25C36.736 71.25 46.25 61.736 46.25 50C46.25 38.2639 36.736 28.75 25 28.75C13.2639 28.75 3.75 38.2639 3.75 50Z"
              fill="#14FF00"
            />
            <path
              d="M75 50C75 63.8071 63.8071 75 50 75C36.1929 75 25 63.8071 25 50C25 36.1929 36.1929 25 50 25C63.8071 25 75 36.1929 75 50ZM28.75 50C28.75 61.736 38.2639 71.25 50 71.25C61.736 71.25 71.25 61.736 71.25 50C71.25 38.2639 61.736 28.75 50 28.75C38.2639 28.75 28.75 38.2639 28.75 50Z"
              fill="#D3FF71"
            />
            <path
              d="M50.9076 49.9835C44.3146 50.223 37.8941 47.8467 33.0456 43.3725C28.1972 38.8983 25.3139 32.689 25.0241 26.0979C24.7344 19.5069 27.0617 13.0685 31.4989 8.18607C35.936 3.30368 42.1232 0.373144 48.7119 0.033208C55.3005 -0.306728 61.7565 1.9715 66.6725 6.37132C71.5886 10.7711 74.5661 16.9358 74.9563 23.5217C75.3464 30.1076 73.1174 36.5807 68.7551 41.5301C64.3929 46.4795 58.2511 49.504 51.6683 49.9443L51.4181 46.2026C57.0134 45.8284 62.234 43.2576 65.9419 39.0506C69.6498 34.8436 71.5444 29.3415 71.2128 23.7435C70.8812 18.1455 68.3503 12.9055 64.1716 9.16563C59.993 5.42578 54.5054 3.48928 48.9051 3.77823C43.3047 4.06717 38.0456 6.55813 34.274 10.7082C30.5025 14.8582 28.5242 20.3308 28.7705 25.9332C29.0168 31.5356 31.4676 36.8136 35.5888 40.6166C39.71 44.4197 45.1674 46.4396 50.7715 46.236L50.9076 49.9835Z"
              fill="#FF6F62"
            />
            <path
              d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25ZM3.75 25C3.75 36.736 13.2639 46.25 25 46.25C36.736 46.25 46.25 36.736 46.25 25C46.25 13.2639 36.736 3.75 25 3.75C13.2639 3.75 3.75 13.2639 3.75 25Z"
              fill="#FFFF26"
            />
            <path
              d="M47.9824 40.1609C50.459 45.9457 50.6629 52.4517 48.5536 58.3802C46.4442 64.3088 42.1767 69.2239 36.6029 72.1444C31.029 75.0649 24.5588 75.776 18.4836 74.1358C12.4085 72.4956 7.17537 68.6247 3.82874 63.2958C0.482114 57.9668 -0.731822 51.5719 0.429233 45.3873C1.59029 39.2026 5.04093 33.6834 10.0924 29.931C15.1439 26.1787 21.4246 24.4693 27.681 25.1442C33.9373 25.819 39.7091 28.8283 43.8443 33.5715L41.0176 36.0358C37.5027 32.0041 32.5967 29.4461 27.2788 28.8725C21.9609 28.2989 16.6223 29.7519 12.3285 32.9414C8.03479 36.1309 5.10175 40.8222 4.11485 46.0792C3.12795 51.3361 4.1598 56.7718 7.00443 61.3014C9.84906 65.831 14.2972 69.1213 19.4611 70.5154C24.6249 71.9096 30.1246 71.3052 34.8624 68.8227C39.6002 66.3403 43.2276 62.1625 45.0206 57.1232C46.8135 52.0839 46.6401 46.5538 44.5351 41.6367L47.9824 40.1609Z"
              fill="#14FF00"
            />
            <path
              d="M25.0057 50.5323C25.12 55.9002 26.9594 61.0887 30.2518 65.3299C33.5441 69.5712 38.1144 72.6398 43.2863 74.0817C48.4582 75.5235 53.9569 75.262 58.9686 73.3359C63.9804 71.4097 68.2388 67.9213 71.1138 63.3868C73.9889 58.8522 75.3276 53.5126 74.9321 48.1581C74.5365 42.8035 72.4276 37.7186 68.9174 33.6558C65.4072 29.593 60.6824 26.7682 55.442 25.5995C50.2016 24.4307 44.7242 24.9801 39.8203 27.1664L41.3473 30.5914C45.5155 28.7331 50.1714 28.2661 54.6257 29.2596C59.08 30.253 63.0961 32.6541 66.0798 36.1074C69.0634 39.5608 70.856 43.883 71.1922 48.4344C71.5285 52.9857 70.3905 57.5244 67.9468 61.3787C65.503 65.2331 61.8833 68.1983 57.6233 69.8355C53.3634 71.4727 48.6895 71.695 44.2934 70.4694C39.8972 69.2438 36.0125 66.6355 33.214 63.0305C30.4155 59.4254 28.852 55.0152 28.7548 50.4525L25.0057 50.5323Z"
              fill="#D3FF71"
            />
            <path
              d="M33.5283 31.1936C29.5626 34.6669 26.7963 39.3051 25.625 44.445L29.2812 45.2783C30.2769 40.9093 32.6282 36.9669 35.999 34.0145L33.5283 31.1936Z"
              fill="#D3FF71"
            />
            <path
              d="M50.9076 49.9835C54.5688 49.8505 58.1561 48.9144 61.4155 47.2416C64.6749 45.5687 67.5268 43.1999 69.7693 40.3028C72.0119 37.4057 73.5903 34.0511 74.3928 30.4764C75.1953 26.9018 75.2024 23.1944 74.4135 19.6167C73.6246 16.039 72.0591 12.6785 69.8276 9.77282C67.5961 6.86718 64.7533 4.4875 61.5003 2.80219C58.2473 1.11687 54.6637 0.167112 51.003 0.020128C47.3423 -0.126856 43.6941 0.532526 40.3164 1.95161L41.769 5.40887C44.6399 4.20265 47.741 3.64217 50.8525 3.76711C53.9641 3.89205 57.0102 4.69934 59.7753 6.13186C62.5403 7.56438 64.9567 9.58711 66.8534 12.0569C68.7502 14.5267 70.0809 17.3832 70.7515 20.4242C71.4221 23.4653 71.416 26.6165 70.7339 29.655C70.0517 32.6934 68.7101 35.5448 66.8039 38.0073C64.8978 40.4699 62.4736 42.4834 59.7032 43.9053C56.9327 45.3273 53.8835 46.1229 50.7715 46.236L50.9076 49.9835Z"
              fill="#FF6F62"
            />
            <path
              d="M30.8623 41.0857C34.4833 45.3937 39.452 48.354 44.9644 49.4876L45.7197 45.8145C41.0342 44.8509 36.8108 42.3347 33.733 38.6728L30.8623 41.0857Z"
              fill="#FF6F62"
            />
            <path
              d="M33.8007 5.95838C29.6656 9.47624 26.788 14.2446 25.6029 19.5427C24.4178 24.8408 24.9895 30.3807 27.2317 35.325L30.647 33.7763C28.7411 29.5736 28.2551 24.8646 29.2625 20.3613C30.2698 15.8579 32.7158 11.8048 36.2306 8.81462L33.8007 5.95838Z"
              fill="#FF6F62"
            />
          </svg>
          <p className="el-dnevnik">Электронный Дневник</p>
        </div>
        <div className="kol-nastroiki">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="41"
            viewBox="0 0 27 41"
            fill="none"
            className="kol"
          >
            <path
              d="M17 27.5C17 27.9596 16.9095 28.4148 16.7336 28.8394C16.5577 29.264 16.2999 29.6499 15.9749 29.9749C15.6499 30.2999 15.264 30.5577 14.8394 30.7336C14.4148 30.9095 13.9596 31 13.5 31C13.0404 31 12.5852 30.9095 12.1606 30.7336C11.736 30.5577 11.3501 30.2999 11.0251 29.9749C10.7001 29.6499 10.4423 29.264 10.2664 28.8394C10.0905 28.4148 10 27.9596 10 27.5L13.5 27.5H17Z"
              fill="#D9D9D9"
            />
            <path
              d="M7.27141e-07 27.5C5.72154e-07 25.7272 0.349188 23.9717 1.02763 22.3338C1.70606 20.6959 2.70047 19.2076 3.95406 17.9541C5.20765 16.7005 6.69588 15.7061 8.33377 15.0276C9.97167 14.3492 11.7272 14 13.5 14C15.2728 14 17.0283 14.3492 18.6662 15.0276C20.3041 15.7061 21.7923 16.7005 23.0459 17.9541C24.2995 19.2076 25.2939 20.6959 25.9724 22.3338C26.6508 23.9717 27 25.7272 27 27.5L13.5 27.5L7.27141e-07 27.5Z"
              fill="#D9D9D9"
            />
            <path
              d="M3 20.5C3 17.8079 3.27159 15.1422 3.79927 12.655C4.32694 10.1678 5.10036 7.90791 6.07538 6.00431C7.05039 4.10071 8.20791 2.59069 9.48182 1.56047C10.7557 0.530248 12.1211 1.03848e-06 13.5 9.17939e-07C14.8789 7.97394e-07 16.2443 0.530247 17.5182 1.56047C18.7921 2.59069 19.9496 4.10071 20.9246 6.00431C21.8996 7.90791 22.6731 10.1678 23.2007 12.655C23.7284 15.1422 24 17.8079 24 20.5L13.5 20.5L3 20.5Z"
              fill="#D9D9D9"
            />
          </svg>
          <p className="nastroiki">Настройки</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            className="nastroiki-icon"
          >
            <circle cx="25" cy="25" r="25" fill="#D9D9D9" />
          </svg>
        </div>
      </header>
      <div className="ocenki-settings">
        <div className="tekycie-itogovie">
          <div className="tekycie">
            <p className="tekycie-text">Текущие</p>
          </div>
          <div className="itogovie">
            <p className="itogovie-text">Итоговые</p>
          </div>
        </div>
        <select className="ocenki-data">
          <option>1 четверть</option>
          <option>2 четверть</option>
          <option>1 полугодие</option>
          <option>3 четверть</option>
          <option>4 четверть</option>
          <option>2 полугодие</option>
        </select>
      </div>
      <div className="ocenki-main">
        <div className="ocenki-row">
          <div className="ocenki-predmet">
            <p className="ocenki-predmet-text">Предмет</p>
          </div>
          <div className="ocenki-sredbal-5">
            <p className="ocenki-sredbal-text">5.00</p>
          </div>
          <div className="ocenki-mass">
            <div className="ocenka-5">
              <p className="ocenka-text">5</p>
            </div>
            <div className="ocenka-5">
              <p className="ocenka-text">5</p>
            </div>
            <div className="ocenka-5">
              <p className="ocenka-text">5</p>
            </div>
          </div>
        </div>
        <div className="ocenki-row">
          <div className="ocenki-predmet">
            <p className="ocenki-predmet-text">Предмет</p>
          </div>
          <div className="ocenki-sredbal-4">
            <p className="ocenki-sredbal-text">4.00</p>
          </div>
          <div className="ocenki-mass">
            <div className="ocenka-4">
              <p className="ocenka-text">4</p>
            </div>
            <div className="ocenka-4">
              <p className="ocenka-text">4</p>
            </div>
            <div className="ocenka-4">
              <p className="ocenka-text">4</p>
            </div>
          </div>
        </div>
        <div className="ocenki-row">
          <div className="ocenki-predmet">
            <p className="ocenki-predmet-text">Предмет</p>
          </div>
          <div className="ocenki-sredbal-3">
            <p className="ocenki-sredbal-text">3.00</p>
          </div>
          <div className="ocenki-mass">
            <div className="ocenka-3">
              <p className="ocenka-text">3</p>
            </div>
            <div className="ocenka-3">
              <p className="ocenka-text">3</p>
            </div>
            <div className="ocenka-3">
              <p className="ocenka-text">3</p>
            </div>
          </div>
        </div>
        <div className="ocenki-row">
          <div className="ocenki-predmet">
            <p className="ocenki-predmet-text">Предмет</p>
          </div>
          <div className="ocenki-sredbal-2">
            <p className="ocenki-sredbal-text">2.00</p>
          </div>
          <div className="ocenki-mass">
            <div className="ocenka-2">
              <p className="ocenka-text">2</p>
            </div>
            <div className="ocenka-2">
              <p className="ocenka-text">2</p>
            </div>
            <div className="ocenka-2">
              <p className="ocenka-text">2</p>
            </div>
          </div>
        </div>
        <div className="ocenki-row">
          <div className="ocenki-predmet">
            <p className="ocenki-predmet-text">Предмет</p>
          </div>
          <div className="ocenki-sredbal-1">
            <p className="ocenki-sredbal-text">1.00</p>
          </div>
          <div className="ocenki-mass">
            <div className="ocenka-1">
              <p className="ocenka-text">1</p>
            </div>
            <div className="ocenka-1">
              <p className="ocenka-text">1</p>
            </div>
            <div className="ocenka-1">
              <p className="ocenka-text">1</p>
            </div>
          </div>
        </div>
        <div className="ocenki-row">
          <div className="ocenki-predmet">
            <p className="ocenki-predmet-text">Предмет</p>
          </div>
          <div className="ocenki-sredbal-5">
            <p className="ocenki-sredbal-text">0.00</p>
          </div>
          <div className="ocenki-mass">

          </div>
        </div>
        <div className="ocenki-row">
          <div className="ocenki-predmet">
            <p className="ocenki-predmet-text">Предмет</p>
          </div>
          <div className="ocenki-sredbal-5">
            <p className="ocenki-sredbal-text">0.00</p>
          </div>
          <div className="ocenki-mass">

          </div>
        </div>
        <div className="ocenki-row">
          <div className="ocenki-predmet">
            <p className="ocenki-predmet-text">Предмет</p>
          </div>
          <div className="ocenki-sredbal-5">
            <p className="ocenki-sredbal-text">0.00</p>
          </div>
          <div className="ocenki-mass">

          </div>
        </div>
        <div className="ocenki-row">
          <div className="ocenki-predmet">
            <p className="ocenki-predmet-text">Предмет</p>
          </div>
          <div className="ocenki-sredbal-5">
            <p className="ocenki-sredbal-text">0.00</p>
          </div>
          <div className="ocenki-mass">

          </div>
        </div>
        <div className="ocenki-row">
          <div className="ocenki-predmet">
            <p className="ocenki-predmet-text">Предмет</p>
          </div>
          <div className="ocenki-sredbal-5">
            <p className="ocenki-sredbal-text">0.00</p>
          </div>
          <div className="ocenki-mass">

          </div>
        </div>
        <div className="ocenki-row">
          <div className="ocenki-predmet">
            <p className="ocenki-predmet-text">Предмет</p>
          </div>
          <div className="ocenki-sredbal-5">
            <p className="ocenki-sredbal-text">0.00</p>
          </div>
          <div className="ocenki-mass">

          </div>
        </div>
        <div className="ocenki-row">
          <div className="ocenki-predmet">
            <p className="ocenki-predmet-text">Предмет</p>
          </div>
          <div className="ocenki-sredbal-5">
            <p className="ocenki-sredbal-text">0.00</p>
          </div>
          <div className="ocenki-mass">

          </div>
        </div>
        <div className="ocenki-row">
          <div className="ocenki-predmet">
            <p className="ocenki-predmet-text">Предмет</p>
          </div>
          <div className="ocenki-sredbal-5">
            <p className="ocenki-sredbal-text">0.00</p>
          </div>
          <div className="ocenki-mass">

          </div>
        </div>
        <div className="ocenki-row">
          <div className="ocenki-predmet">
            <p className="ocenki-predmet-text">Предмет</p>
          </div>
          <div className="ocenki-sredbal-5">
            <p className="ocenki-sredbal-text">0.00</p>
          </div>
          <div className="ocenki-mass">

          </div>
        </div>
        <div className="ocenki-row">
          <div className="ocenki-predmet">
            <p className="ocenki-predmet-text">Предмет</p>
          </div>
          <div className="ocenki-sredbal-5">
            <p className="ocenki-sredbal-text">0.00</p>
          </div>
          <div className="ocenki-mass">

          </div>
        </div>
        <div className="ocenki-row">
          <div className="ocenki-predmet">
            <p className="ocenki-predmet-text">Предмет</p>
          </div>
          <div className="ocenki-sredbal-5">
            <p className="ocenki-sredbal-text">0.00</p>
          </div>
          <div className="ocenki-mass">

          </div>
        </div>
      </div>
    </>
  );
};

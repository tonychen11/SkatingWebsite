export function BackgroundSkates() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
    >
      <div className="skate-illustration skate-illustration-primary">
        <svg
          viewBox="0 0 900 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <path
            d="M280 180C335 138 418 128 493 159C551 183 591 227 616 286L657 382C674 424 708 457 750 476L812 503C830 510 840 528 836 547C832 566 815 580 796 580H683C642 580 604 594 575 622L519 676C475 718 414 741 352 739L277 736C236 734 206 697 213 656L243 486C247 462 245 437 238 414L213 326C197 270 219 217 280 180Z"
            stroke="currentColor"
            strokeWidth="22"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M314 240L475 240"
            stroke="currentColor"
            strokeWidth="18"
            strokeLinecap="round"
          />
          <path
            d="M334 302L488 302"
            stroke="currentColor"
            strokeWidth="18"
            strokeLinecap="round"
          />
          <path
            d="M354 364L504 364"
            stroke="currentColor"
            strokeWidth="18"
            strokeLinecap="round"
          />
          <path
            d="M289 747H718C771 747 814 705 818 652"
            stroke="currentColor"
            strokeWidth="24"
            strokeLinecap="round"
          />
          <path
            d="M706 611L786 611"
            stroke="currentColor"
            strokeWidth="20"
            strokeLinecap="round"
          />
          <path
            d="M306 165L348 83H477L446 165"
            stroke="currentColor"
            strokeWidth="18"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="skate-illustration skate-illustration-secondary">
        <svg
          viewBox="0 0 700 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <path
            d="M204 181C246 147 309 139 366 161C412 179 444 211 466 256L500 332C513 363 538 388 569 402L615 423C629 429 637 443 634 457C631 472 619 482 604 482H520C490 482 462 492 441 512L400 552C366 584 320 601 273 600L218 598C187 597 164 569 170 539L192 414C195 396 193 378 188 360L170 293C158 252 174 211 204 181Z"
            stroke="currentColor"
            strokeWidth="18"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M229 228L353 228"
            stroke="currentColor"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <path
            d="M245 275L364 275"
            stroke="currentColor"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <path
            d="M201 606H549"
            stroke="currentColor"
            strokeWidth="20"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

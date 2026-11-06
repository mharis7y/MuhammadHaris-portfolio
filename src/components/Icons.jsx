import React from "react";

export function Icon({ name, className = "", size = 24, color = "currentColor" }) {
  switch (name) {
    case "email":
    case "mail":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );

    case "github":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={color}
        >
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );

    case "linkedin":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={color}
        >
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      );

    case "phone":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );

    case "chevron-up":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      );

    case "double-chevron-up":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m17 11-5-5-5 5" />
          <path d="m17 18-5-5-5 5" />
        </svg>
      );

    case "close":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      );

    case "menu":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      );

    /* Service Watermark Icons */
    case "service-design":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 100 100"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Ruler and Pencil */}
          <rect x="20" y="35" width="60" height="20" rx="3" transform="rotate(-35 50 45)" />
          <line x1="30" y1="38" x2="35" y2="45" transform="rotate(-35 50 45)" />
          <line x1="42" y1="38" x2="47" y2="45" transform="rotate(-35 50 45)" />
          <line x1="54" y1="38" x2="59" y2="45" transform="rotate(-35 50 45)" />
          <line x1="66" y1="38" x2="71" y2="45" transform="rotate(-35 50 45)" />
          <path d="M25 80L85 20L75 10L15 70L15 85L30 85Z" />
        </svg>
      );

    case "service-development":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 100 100"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Crossed wrench and screwdriver */}
          <path d="M20 30L45 55M35 15C32 18 32 23 35 26L42 33L33 42L26 35C23 32 18 32 15 35L20 40C23 43 28 43 31 40L40 31L75 66C78 69 83 69 86 66L89 63C92 60 92 55 89 52L54 17L63 8C66 5 66 0 63 -3L58 2C55 5 55 10 58 13L51 20L44 13C41 10 36 10 33 13Z" />
          <path d="M80 30L20 90M70 15L85 30L65 50L50 35Z" />
        </svg>
      );

    case "service-maintenance":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 100 100"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Interlocking Gears */}
          <circle cx="40" cy="40" r="16" />
          <circle cx="40" cy="40" r="6" />
          <path d="M40 18V24M40 56V62M18 40H24M56 40H62M24.5 24.5L28.7 28.7M51.3 51.3L55.5 55.5M24.5 55.5L28.7 51.3M51.3 28.7L55.5 24.5" />
          <circle cx="68" cy="68" r="14" />
          <circle cx="68" cy="68" r="5" />
          <path d="M68 50V54M68 82V86M50 68H54M82 68H86M55.3 55.3L58.1 58.1M77.9 77.9L80.7 80.7M55.3 80.7L58.1 77.9M77.9 58.1L80.7 55.3" />
        </svg>
      );

    /* Skill Brand Icons */
    case "react":
      return (
        <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" className={className}>
          <circle cx="0" cy="0" r="2.05" fill="#53C1DE" />
          <g stroke="#53C1DE" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );

    case "expo":
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
          <rect width="128" height="128" rx="28" fill="#000020" />
          <path
            d="M38 92L64 42L90 92H76L64 68L52 92H38Z"
            fill="#FFFFFF"
          />
          <path
            d="M64 28L80 58L72 74L64 58L56 74L48 58L64 28Z"
            fill="#53C1DE"
          />
        </svg>
      );

    case "javascript":
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
          <rect width="128" height="128" rx="20" fill="#F7DF1E" />
          <path
            d="M67.3 88.6c2.5 4.3 6 7.4 12.3 7.4 6 0 9.8-3 9.8-7.2 0-5.1-4.1-6.9-11-9.9l-3.8-1.6c-10.9-4.7-18.1-10.5-18.1-23.1 0-11.5 8.9-20.2 22.8-20.2 9.9 0 17 3.5 22 12.4l-10.6 6.8c-2.4-4.3-5-6-11.4-6-5.4 0-8.5 3.4-8.5 7.1 0 4.5 3.4 6.3 10.3 9.3l3.8 1.6c13 5.6 19.3 11.2 19.3 23.9 0 13.6-10.7 21.3-25.2 21.3-14.2 0-23.2-6.9-27.5-15.6l10.7-7.2zm-42.5 1.5c2 3.4 4.5 6.2 9.1 6.2 4.7 0 7.8-2.1 7.8-10.1V35.4h13.9v50.8c0 15.6-9.1 22.5-21.7 22.5-11.6 0-18.4-5.9-21.8-13.1l12.7-5.5z"
            fill="#000000"
          />
        </svg>
      );

    case "typescript":
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
          <rect width="128" height="128" rx="20" fill="#007ACC" />
          <path
            d="M38 52h32v12H58v48H44V64H38V52zm34 37c2.5 4.3 6 7.4 12.3 7.4 6 0 9.8-3 9.8-7.2 0-5.1-4.1-6.9-11-9.9l-3.8-1.6c-10.9-4.7-18.1-10.5-18.1-23.1 0-11.5 8.9-20.2 22.8-20.2 9.9 0 17 3.5 22 12.4l-10.6 6.8c-2.4-4.3-5-6-11.4-6-5.4 0-8.5 3.4-8.5 7.1 0 4.5 3.4 6.3 10.3 9.3l3.8 1.6c13 5.6 19.3 11.2 19.3 23.9 0 13.6-10.7 21.3-25.2 21.3-14.2 0-23.2-6.9-27.5-15.6l10.7-7.2z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "tailwind":
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
          <path
            d="M32 56c5.3-21.3 18.7-29.3 40-24-10.7 8-16 17.3-16 28 0 16 10.7 21.3 16 32-5.3 21.3-18.7 29.3-40 24 10.7-8 16-17.3 16-28 0-16-10.7-21.3-16-32zm40-24c5.3-21.3 18.7-29.3 40-24-10.7 8-16 17.3-16 28 0 16 10.7 21.3 16 32-5.3 21.3-18.7 29.3-40 24 10.7-8 16-17.3 16-28 0-16-10.7-21.3-16-32z"
            fill="#06B6D4"
          />
        </svg>
      );

    case "zustand":
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
          <circle cx="64" cy="64" r="54" fill="#443E38" />
          <circle cx="44" cy="54" r="8" fill="#FBBF24" />
          <circle cx="84" cy="54" r="8" fill="#FBBF24" />
          <ellipse cx="64" cy="78" rx="16" ry="12" fill="#E5E7EB" />
          <ellipse cx="64" cy="74" rx="7" ry="5" fill="#1F2937" />
          <path d="M26 36C22 30 26 18 36 22C46 26 40 38 26 36Z" fill="#78350F" />
          <path d="M102 36C106 30 102 18 92 22C82 26 88 38 102 36Z" fill="#78350F" />
        </svg>
      );

    case "firebase":
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
          <path
            d="M26.2 92.5L42.5 15.3c.6-2.8 4.2-3.6 5.8-1.3l15.9 22.8-38 55.7z"
            fill="#FFA000"
          />
          <path
            d="M26.2 92.5l75.6-75.1c1.8-1.8 4.8-.8 5.3 1.7l13.6 73.4L26.2 92.5z"
            fill="#F57C00"
          />
          <path
            d="M64.2 36.8L26.2 92.5l38 21.6 38-21.6-38-55.7z"
            fill="#FFCA28"
          />
        </svg>
      );

    case "git":
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
          <path
            d="M123.6 56.4L71.6 4.4c-4-4-10.4-4-14.4 0L4.4 57.2c-4 4-4 10.4 0 14.4l52 52c4 4 10.4 4 14.4 0l52.8-52.8c4-4 4-10.4 0-14.4z"
            fill="#F05032"
          />
          <path
            d="M87.5 49.3c-2.9-2.9-7.2-3.4-10.5-1.7l-9.8-9.8V29c2.8-1.5 4.8-4.5 4.8-8 0-5-4-9-9-9s-9 4-9 9c0 3.7 2.2 6.8 5.3 8.2v29.5c-3.1 1.4-5.3 4.5-5.3 8.2 0 3.5 2 6.5 4.9 8l-8.6 8.6c-3.3-1.7-7.6-1.2-10.5 1.7-4 4-4 10.5 0 14.5s10.5 4 14.5 0c3.1-3.1 3.5-7.7 1.4-11.2l8.2-8.2c1.3.4 2.7.6 4.1.6 3.6 0 6.7-2.1 8.2-5.2h15.2c1.5 3.1 4.6 5.2 8.2 5.2 5 0 9-4 9-9 0-4-3.2-7.2-7.9-7.5z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "python":
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
          <path
            d="M63.3 12c-26.6 0-25 11.5-25 11.5l.1 11.9h25.4v3.6H28.2S12 37.1 12 63.8c0 26.6 14.1 25.7 14.1 25.7h8.4v-12.1s-.5-14.4 14.1-14.4h24.3s13.6.2 13.6-13.3V25.3s2-13.3-25.2-13.3zm-13.7 7.7c2.6 0 4.7 2.1 4.7 4.7s-2.1 4.7-4.7 4.7-4.7-2.1-4.7-4.7 2.1-4.7 4.7-4.7z"
            fill="#3776AB"
          />
          <path
            d="M64.7 116c26.6 0 25-11.5 25-11.5l-.1-11.9H64.2V89h35.6s16.2 1.9 16.2-24.8c0-26.6-14.1-25.7-14.1-25.7h-8.4v12.1s.5 14.4-14.1 14.4H55.1s-13.6-.2-13.6 13.3v22.4s-2 13.3 25.2 13.3zm13.7-7.7c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7-2.1 4.7-4.7 4.7z"
            fill="#FFD43B"
          />
        </svg>
      );

    case "sqlite":
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
          <rect width="128" height="128" rx="20" fill="#003B57" />
          <path
            d="M34 40c0-6.6 13.4-12 30-12s30 5.4 30 12-13.4 12-30 12-30-5.4-30-12z"
            fill="#29B6F6"
          />
          <path
            d="M34 56c0 6.6 13.4 12 30 12s30-5.4 30-12v16c0 6.6-13.4 12-30 12s-30-5.4-30-12V56z"
            fill="#0288D1"
          />
          <path
            d="M34 80c0 6.6 13.4 12 30 12s30-5.4 30-12v16c0 6.6-13.4 12-30 12s-30-5.4-30-12V80z"
            fill="#01579B"
          />
        </svg>
      );

    case "nodejs":
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
          <path
            d="M64 12l48 27.7v55.4L64 122.8 16 95.1V39.7L64 12z"
            fill="#539E43"
          />
          <path
            d="M64 22L24.7 44.7v45.4L64 112.8l39.3-22.7V44.7L64 22z"
            fill="#333333"
          />
          <path
            d="M64 45c-10.5 0-19 8.5-19 19s8.5 19 19 19 19-8.5 19-19-8.5-19-19-19z"
            fill="#539E43"
          />
        </svg>
      );

    case "appwrite":
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
          <rect width="128" height="128" rx="28" fill="#FD366E" />
          <path
            d="M40 76c0-13.3 10.7-24 24-24s24 10.7 24 24H40zm48-24c0-13.3-10.7-24-24-24s-24 10.7-24 24h48z"
            fill="#FFFFFF"
          />
          <circle cx="64" cy="94" r="8" fill="#FFFFFF" />
        </svg>
      );

    case "api":
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
          <rect width="128" height="128" rx="24" fill="#0F766E" />
          <path
            d="M48 44L28 64l20 20M80 44l20 20-20 20"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M70 38L58 90" stroke="#5EEAD4" strokeWidth="9" strokeLinecap="round" />
        </svg>
      );

    case "postman":
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
          <circle cx="64" cy="64" r="54" fill="#FF6C37" />
          <path
            d="M86 42c-2.4-2.4-6.3-2.4-8.7 0L49.6 69.7c-2 2-5.2 2-7.2 0l-4.7-4.7c-2.4-2.4-6.3-2.4-8.7 0-2.4 2.4-2.4 6.3 0 8.7l9.1 9.1c4.3 4.3 11.3 4.3 15.6 0l32.3-32.3c2.4-2.3 2.4-6.2 0-8.5z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "flag-uk":
      return (
        <svg width={size} height={size} viewBox="0 0 60 60" className={className}>
          <clipPath id="uk-circle">
            <circle cx="30" cy="30" r="30" />
          </clipPath>
          <g clipPath="url(#uk-circle)">
            <rect width="60" height="60" fill="#00247D" />
            <path d="M0 0L60 60M60 0L0 60" stroke="#FFFFFF" strokeWidth="8" />
            <path d="M0 0L60 60M60 0L0 60" stroke="#CF142B" strokeWidth="5" />
            <path d="M30 0V60M0 30H60" stroke="#FFFFFF" strokeWidth="12" />
            <path d="M30 0V60M0 30H60" stroke="#CF142B" strokeWidth="8" />
          </g>
        </svg>
      );

    case "flag-pk":
      return (
        <svg width={size} height={size} viewBox="0 0 60 60" className={className}>
          <clipPath id="pk-circle">
            <circle cx="30" cy="30" r="30" />
          </clipPath>
          <g clipPath="url(#pk-circle)">
            <rect width="60" height="60" fill="#01411C" />
            <rect width="16" height="60" fill="#FFFFFF" />
            <circle cx="39" cy="30" r="14" fill="#FFFFFF" />
            <circle cx="43" cy="27" r="13" fill="#01411C" />
            <polygon
              points="45,21 47,26 52,26 48,29 50,34 45,31 41,34 43,29 39,26 44,26"
              fill="#FFFFFF"
            />
          </g>
        </svg>
      );

    case "flag-pashto":
      return (
        <svg width={size} height={size} viewBox="0 0 60 60" className={className}>
          <clipPath id="pashto-circle">
            <circle cx="30" cy="30" r="30" />
          </clipPath>
          <g clipPath="url(#pashto-circle)">
            <rect width="60" height="20" fill="#000000" />
            <rect y="20" width="60" height="20" fill="#D32F2F" />
            <rect y="40" width="60" height="20" fill="#388E3C" />
            <circle cx="30" cy="30" r="11" fill="none" stroke="#FFFFFF" strokeWidth="2" />
            <path d="M26 30L34 30M30 26L30 34" stroke="#FFFFFF" strokeWidth="2" />
          </g>
        </svg>
      );

    default:
      return null;
  }
}

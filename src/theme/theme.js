const pallete = {
  base: {
    white: "white",
    black: "black",
  },
  neutral: {
    950: "#0E121B",
    900: "#191B25",
    800: "#232530",
    700: "#2B303B",
    600: "#525866",
    500: "#717784",
    400: "#99A0AE",
    300: "#CACFD8",
    200: "#E0E4EA",
    100: "#F3F5F8",
    50: "#F5F7FA",
  },
  blue: {
    700: "#2547D0",
    500: "#335CFF",
  },
  green: {
    500: "#21C16B",
    100: "#D1FBE9",
  },
  red: {
    500: "#FB3748",
    100: "#FFD5D8",
  },
};

const typography = {
  fontFamily: "Inter, sans-serif",
  body: {
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: 1.2,
    letterSpacing: "-0.2px",
  },
  preset1: {
    fontSize: "24px",
    fontWeight: "600",
    lineHeight: "1.2",
    letterSpacing: "-0.5px",
  },
  preset2: {
    fontSize: "20px",
    fontWeight: "700",
    lineHeight: "1.2",
    letterSpacing: "-0.5px",
  },
  preset3: {
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "1.2",
    letterSpacing: "-0.3px",
  },
  preset4: {
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "1.2",
    letterSpacing: "-0.2px",
  },
  preset5: {
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "1.2",
    letterSpacing: "-0.2px",
  },
  preset6: {
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "1.2",
    letterSpacing: "-0.2px",
  },
};

const radius = {
  0: 0,
  4: "4px",
  6: "6",
  8: "8px",
  10: "10px",
  12: "12px",
  16: "16px",
  20: "20px",
  24: "24px",
  full: "999px",
};

const buttonDisabled = {
  text: pallete.neutral[300],
  background: pallete.neutral[50],
  border: "transparent",
};

const boxShadow = `0 0 0 2px ${pallete.base.white}, 0 0 0 4px ${pallete.neutral[400]}`;

export const lightTheme = {
  colors: {
    mode: "light",
    body: pallete.neutral[50],
    container: pallete.base.white,
    text: pallete.neutral[800],
    title: pallete.neutral[950],
    titleMuted: pallete.neutral[600],
    subtitle: pallete.neutral[700],
    settingsIcon: pallete.neutral[500],
    description: pallete.neutral[700],
    border: pallete.neutral[200],
    logoText: pallete.base.black,
    hr: pallete.neutral[200],
    tagTitle: pallete.neutral[500],
    hintText: pallete.neutral[700],
    emptyText: pallete.neutral[950],
    emptyTextBackground: pallete.neutral[100],
    selectNote: pallete.neutral[500],
    // Buttons
    buttons: {
      primary: {
        default: {
          text: pallete.base.white,
          background: pallete.blue[500],
          border: "transparent",
        },
        hover: {
          text: pallete.base.white,
          background: pallete.blue[700],
          border: "transparent",
        },
        focus: {
          text: pallete.base.white,
          background: pallete.blue[500],
          border: "transparent",
          boxShadow,
        },
        disabled: { ...buttonDisabled },
      },
      secondary: {
        default: {
          text: pallete.neutral[600],
          background: pallete.neutral[100],
          border: "transparent",
        },
        hover: {
          text: pallete.neutral[950],
          background: pallete.base.white,
          border: pallete.neutral[300],
        },
        focus: {
          text: pallete.neutral[950],
          background: pallete.base.white,
          border: pallete.neutral[950],
          boxShadow,
        },
        disabled: { ...buttonDisabled },
      },
      border: {
        default: {
          text: pallete.neutral[950],
          background: "transparent",
          border: pallete.neutral[300],
        },
        hover: {
          text: pallete.neutral[600],
          background: pallete.neutral[100],
          border: "transparent",
        },
        focus: {
          text: pallete.neutral[950],
          background: pallete.base.white,
          border: pallete.neutral[950],
          boxShadow,
        },
        disabled: { ...buttonDisabled },
      },
      delete: {
        default: {
          text: pallete.base.white,
          background: pallete.red[500],
          border: "transparent",
        },
        hover: {
          text: pallete.base.white,
          background: pallete.red[500],
          border: "transparent",
        },
        focus: {
          text: pallete.base.white,
          background: pallete.red[500],
          border: "transparent",
          boxShadow,
        },
        disabled: { ...buttonDisabled },
      },
    },
    // Modal
    modal: {
      title: pallete.neutral[950],
      text: pallete.neutral[700],
      background: pallete.base.white,
      border: pallete.neutral[200],
      iconContainer: {
        background: pallete.neutral[100],
      },
    },
    // Toast
    toast: {
      text: pallete.neutral[950],
    },
    // Nav link
    navLink: pallete.neutral[700],
    navLinkActive: pallete.neutral[950],
    navLinkIconActive: pallete.blue[500],
    navLinkBackgroundActive: pallete.neutral[100],
    navLinkChevron: pallete.neutral[950],
    // Shadow
    shadowInner: pallete.base.white,
    shadowOuter: pallete.neutral[500],
    shadowError: pallete.red[500],
    // Theme options
    themeOption: {
      title: pallete.neutral[950],
      subTitle: pallete.neutral[700],
      border: pallete.neutral[200],
      background: "transparent",
      backgroundActive: pallete.neutral[100],
      iconContainer: {
        border: pallete.neutral[200],
        background: pallete.base.white,
      },
    },
    // Radio
    radio: {
      background: pallete.neutral[200],
      backgroundInner: pallete.base.white,
      backgroundActive: pallete.blue[500],
      backgroundInnerActive: pallete.base.white,
    },
    // Input
    input: {
      text: pallete.neutral[950],
      label: pallete.neutral[950],
      labelLight: pallete.neutral[700],
      hintText: pallete.neutral[600],
      placeholder: pallete.neutral[500],
      placeholderLight: pallete.neutral[400],
      placeholderDisabled: pallete.neutral[300],
      background: "transparent",
      backgroundHover: pallete.neutral[50],
      backgroundDisabled: pallete.neutral[50],
      border: pallete.neutral[300],
      borderFocused: pallete.neutral[950],
      error: pallete.red[500],
      icon: pallete.neutral[500],
      shadowInner: pallete.base.white,
      shadowOuter: pallete.neutral[500],
    },
    // NoteLink
    noteLink: {
      text: pallete.neutral[950],
      borderBottom: pallete.neutral[200],
      backgroundActive: pallete.neutral[100],
      backgroundHover: pallete.neutral[50],
      tagBackground: pallete.neutral[200],
      lastEdited: pallete.neutral[700],
    },
  },
  typography,
  radius,
};

export const darkTheme = {
  mode: "dark",
  colors: {
    body: pallete.base.black,
    container: pallete.neutral[950],
    text: pallete.neutral[100],
    title: pallete.base.white,
    titleMuted: pallete.neutral[300],
    subtitle: pallete.neutral[200],
    settingsIcon: pallete.neutral[400],
    description: pallete.neutral[300],
    border: pallete.neutral[800],
    logoText: pallete.base.white,
    hr: pallete.neutral[800],
    tagTitle: pallete.neutral[500],
    hintText: pallete.neutral[200],
    emptyText: pallete.base.white,
    emptyTextBackground: pallete.neutral[700],
    selectNote: pallete.neutral[400],
    // Buttons
    buttons: {
      primary: {
        default: {
          text: pallete.base.white,
          background: pallete.blue[500],
          border: "transparent",
        },
        hover: {
          text: pallete.base.white,
          background: pallete.blue[700],
          border: "transparent",
        },
        focus: {
          text: pallete.base.white,
          background: pallete.blue[500],
          border: "transparent",
          boxShadow,
        },
        disabled: { ...buttonDisabled },
      },
      secondary: {
        default: {
          text: pallete.neutral[400],
          background: pallete.neutral[800],
          border: "transparent",
        },
        hover: {
          text: pallete.neutral[950],
          background: pallete.base.white,
          border: pallete.neutral[300],
        },
        focus: {
          text: pallete.neutral[950],
          background: pallete.base.white,
          border: pallete.neutral[950],
          boxShadow,
        },
        disabled: { ...buttonDisabled },
      },
      border: {
        default: {
          text: pallete.base.white,
          background: "transparent",
          border: pallete.neutral[600],
        },
        hover: {
          text: pallete.neutral[600],
          background: pallete.neutral[100],
          border: "transparent",
        },
        focus: {
          text: pallete.neutral[950],
          background: pallete.base.white,
          border: pallete.neutral[950],
          boxShadow,
        },
        disabled: { ...buttonDisabled },
      },
      delete: {
        default: {
          text: pallete.base.white,
          background: pallete.red[500],
          border: "transparent",
        },
        hover: {
          text: pallete.base.white,
          background: pallete.red[500],
          border: "transparent",
        },
        focus: {
          text: pallete.base.white,
          background: pallete.red[500],
          border: "transparent",
          boxShadow,
        },
        disabled: { ...buttonDisabled },
      },
    },
    // Modal
    modal: {
      title: pallete.base.white,
      text: pallete.neutral[200],
      background: pallete.neutral[700],
      border: pallete.neutral[600],
      iconContainer: {
        background: pallete.neutral[600],
      },
    },
    // Toast
    toast: {
      text: pallete.base.white,
    },
    // Nav link
    navLink: pallete.neutral[200],
    navLinkActive: pallete.neutral[200],
    navLinkIconActive: pallete.blue[500],
    navLinkBackgroundActive: pallete.neutral[800],
    navLinkChevron: pallete.base.white,
    // Shadow
    shadowInner: pallete.neutral[950],
    shadowOuter: pallete.neutral[600],
    shadowError: pallete.red[500],
    // Theme options
    themeOption: {
      title: pallete.base.white,
      subTitle: pallete.neutral[300],
      border: pallete.neutral[800],
      background: "transparent",
      backgroundActive: pallete.neutral[800],
      iconContainer: {
        border: pallete.neutral[700],
        background: pallete.neutral[950],
      },
    },
    // Radio
    radio: {
      background: pallete.neutral[600],
      backgroundActive: pallete.blue[500],
      backgroundInner: pallete.neutral[950],
      backgroundInnerActive: pallete.neutral[800],
    },
    // Input
    input: {
      text: pallete.base.white,
      labelText: pallete.neutral[950],
      hintText: pallete.neutral[400],
      placeholder: pallete.neutral[400],
      placeholderDisabled: pallete.neutral[500],
      background: "transparent",
      backgroundHover: pallete.neutral[800],
      backgroundDisabled: pallete.neutral[800],
      border: pallete.neutral[600],
      borderFocused: pallete.neutral[600],
      error: pallete.red[500],
      icon: pallete.neutral[500],
      shadowInner: pallete.neutral[950],
      shadowOuter: pallete.neutral[600],
    },
    // NoteLink
    noteLink: {
      text: pallete.base.white,
      borderBottom: pallete.neutral[800],
      backgroundActive: pallete.neutral[800],
      backgroundHover: pallete.neutral[700],
      tagBackground: pallete.neutral[600],
      lastEdited: pallete.neutral[300],
    },
  },
  typography,
  radius,
};

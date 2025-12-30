import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// EN
import enText from "./text/en/text.json";
import enTableDoc from "./text/en/tableDoc.json";

// RU
import ruText from "./text/rus/textRus.json";
import ruTableDoc from "./text/rus/tableDocRus.json";

//kr
import krText from "./text/kr/textKr.json";
import krTableDoc from "./text/kr/tableDocKr.json";

//cn
import jpText   from "./text/jp/textJp.json";;
import jpTableDoc  from "./text/jp/tableDocJp.json";

//jp
import cnText from "./text/cn/textCn.json";
import cnTableDoc from "./text/cn/tableDocCn.json";

//arb
import arbText from "./text/arb/textArb.json";
import arbTableDoc from "./text/arb/tableDocArb.json";

i18n.use(initReactI18next).init({
  resources: {
    EN: {
      translation: {
        ...enText,
        ...enTableDoc,
      },
    },
    RU: {
      translation: {
        ...ruText,
        ...ruTableDoc,
      },
    },
    KR: {
      translation: {
        ...krText,
        ...krTableDoc,
      },
    },

    JP: {
      translation:{
        ...jpText,
        ...jpTableDoc,
      }
    },
    CN: {
      translation:{
        ...cnText,
        ...cnTableDoc,
      }
    },
    ARB: {
      translation: {
        ...arbText,
        ...arbTableDoc,
      }
    }
  },

  lng: localStorage.getItem("lang") || "EN",
  fallbackLng: "EN",
  debug: true,

  interpolation: {
    escapeValue: false,
  },

  returnObjects: true,
});

export default i18n;

const cardsData = [
  {
    id: 1,
    title: "Autotune che non funziona",
    sfortuna: 5,
    image: require("../../img/1)autotune_rotto.png"),
  },
  {
    id: 2,
    title: "base sbagliata",
    sfortuna: 8,
    image: require("../../img/2)base_sbagliata.png"),
  },
  {
    id: 3,
    title: "Batterista accellerato",
    sfortuna: 10,
    image: require("../../img/3)batterista_accellerato.png"),
  },
  {
    id: 4,
    title: "cadi dal palco",
    sfortuna: 12,
    image: require("../../img/4)cadi dal palco.png"),
  },
  {
    id: 5,
    title: "cantante ubriaco",
    sfortuna: 14,
    image: require("../../img/5)cantante_ubriaco.png"),
  },
  {
    id: 6,
    title: "chitarra scollegata dall'amplificatore",
    sfortuna: 16,
    image: require("../../img/6)chitarra_scollegata_amplificatore.png"),
  },
  {
    id: 7,
    title: "corda spezzata",
    sfortuna: 18,
    image: require("../../img/7)corda_spezzata.png"),
  },
  {
    id: 8,
    title: "esplosione cassa vicino il tuo orecchio",
    sfortuna: 20,
    image: require("../../img/8)esplosione_cassa_vicino_orecchio.png"),
  },
  {
    id: 9,
    title: "Il basso fa un boato",
    sfortuna: 22,
    image: require("../../img/9)il_basso_fa_un_boato.png"),
  },
  {
    id: 10,
    title: "Inciampi con il cavo del microfono",
    sfortuna: 24,
    image: require("../../img/10)inciampi_con_il_microfono.png"),
  },
  {
    id: 11,
    title: "ti lanciano bottiglie",
    sfortuna: 26,
    image: require("../../img/11)lancio_bottiglie.png"),
  },
  {
    id: 12,
    title: "microfono in faccia",
    sfortuna: 28,
    image: require("../../img/12)microfono_in_faccia.png"),
  },
  {
    id: 13,
    title: "microfono scollegato",
    sfortuna: 30,
    image: require("../../img/13)microfono_scollegato.png"),
  },
  {
    id: 14,
    title: "nessuno che canta la tua canzone",
    sfortuna: 32,
    image: require("../../img/14)nessuno_canta.png"),
  },
  {
    id: 15,
    title: "non ricordi la tua canzone",
    sfortuna: 34,
    image: require("../../img/15)nn_ricordi_la_tua_canzone.png"),
  },
  {
    id: 16,
    title: "parti fuori tempo",
    sfortuna: 36,
    image: require("../../img/16)parti_fuori_tempo.png"),
  },
  {
    id: 17,
    title: "pianoforte spento durante la tua miglior canzone",
    sfortuna: 38,
    image: require("../../img/17)piano_spento.png"),
  },
  {
    id: 18,
    title: "Il pubblico canta meglio di te",
    sfortuna: 40,
    image: require("../../img/18)pubblico_canta_meglio.png"),
  },
  {
    id: 19,
    title: "il tuo tasto fa cosi schifo che te lo dimentichi",
    sfortuna: 42,
    image: require("../../img/19)testo_dimenticato.png"),
  },
  {
    id: 20,
    title: "piove forte mentre canti",
    sfortuna: 44,
    image: require("../../img/20)acqua_mentre_canti.png"),
  },
  {
    id: 21,
    title: "blackout durante il tuo concerto",
    sfortuna: 46,
    image: require("../../img/21)salta_la_corrente.png"),
  },
  {
    id: 22,
    title: "il pubblico ti abbandona",
    sfortuna: 48,
    image: require("../../img/22)il_pubblico_ti_abbandona.png"),
  },
  {
    id: 23,
    title: "Il tuo rivale ti umilia",
    sfortuna: 50,
    image: require("../../img/23)il_tuo_rivale_ti_umilia.png"),
  },
  {
    id: 24,
    title: "Ti cade la bacchetta della batteria durante il mosh pit",
    sfortuna: 52,
    image: require("../../img/24)ti_cade_la_bacchetta.png"),
  },
  {
    id: 25,
    title: "ti dimentichi il plettro a casa",
    sfortuna: 54,
    image: require("../../img/25)ti_dimentichi_il_plettro.png"),
  },
  {
    id: 26,
    title: "Ti cade la chitarra dal palco",
    sfortuna: 56,
    image: require("../../img/26)ti_cade_la_chitarra.png"),
  },
  {
    id: 27,
    title: "La folla ti lancia scarpe",
    sfortuna: 58,
    image: require("../../img/27)ti_lanciano_le_scarpe.png"),
  },
  {
    id: 28,
    title: "L’amplificatore prende fuoco",
    sfortuna: 60,
    image: require("../../img/28)l'amplificatore_va_a_fuoco.png"),
  },
  {
    id: 29,
    title: "Il microfono fa un fischio fortissimo",
    sfortuna: 62,
    image: require("../../img/29)il_microfono_fischia_fortissimo.png"),
  },
  {
    id: 30,
    title: "Dimentichi il nome della tua band",
    sfortuna: 64,
    image: require("../../img/30)dimentichi_il_nome_della_tua_band.png"),
  },
  {
    id: 31,
    title: "Il pubblico urla 'scendi dal palco",
    sfortuna: 66,
    image: require("../../img/31)il_pubblico_urla_scendi_dal_palco.png"),
  },
  {
    id: 32,
    title: "Il pubblico apre Spotify durante il tuo concerto",
    sfortuna: 68,
    image: require("../../img/32)il_pubblico_apre_spotify_per_la_noia.png"),
  },
  {
    id: 33,
    title: "La tua chitarra fa il suono di una sveglia",
    sfortuna: 70,
    image: require("../../img/33)la_chitarra_fa_il_suono_di_una_sveglia.png"),
  },

  {
    id: 34,
    title: "Il palco gira e inizi a cadere mentre canti",

    image: require("../../img/34)il_palco_gira_e_inizi_a_cadere.png"),
    sfortuna: 72,
  },
  {
    id: 35,
    title: "Il dj spegne la musica durante il tuo concerto",
    image: require("../../img/35)il_dj_spegne_tutto.png"),
    sfortuna: 72,
  },

  {
    id: 36,
    title: "ti si piega in due il jack della chitarra",
    image: require("../../img/36)ti_si_piega_in_due_il_jack.png"),
    sfortuna: 72,
  },

  {
    id: 37,
    title: "Il pubblico smette di cantare all'improvviso",
    image: require("../../img/37)pubblico_smette_improvvisamente_di_cantare.png"),
    sfortuna: 72,
  },

  {
    id: 38,
    title: "Il palco crolla",
    image: require("../../img/38)il_palco_crolla.png"),
    sfortuna: 72,
  },

  {
    id: 39,
    title: "Ivomiti sul palco",
    image: require("../../img/39)vomiti_sul_palco.png"),
    sfortuna: 72,
  },

  {
    id: 40,
    title: "Il tuo playback fa partire Peppa Pig live",
    image: require("../../img/40)parte_peppa_pig.png"),
    sfortuna: 84,
  },

  {
    id: 41,
    title: "dici cose a caso perche hai fumato marijuana",
    image: require("../../img/41)hai_fumato_troppa_marijjuana.png"),
    sfortuna: 86,
  },

  {
    id: 42,
    title: "La tua voce diventa acutissima davanti a tutti",
    image: require("../../img/42)la_tua_voce_diventa_acutissima.png"),
    sfortuna: 88,
  },

  {
    id: 43,
    title: "Il pubblico lascia il concerto per andare al bar",
    image: require("../../img/43)il_pubblico_lascia_il_concerto_e_va_al_bar.png"),
    sfortuna: 90,
  },

  {
    id: 44,
    title: "Ti rompi un dente col microfono",
    image: require("../../img/44)ti_rompi_un_dente_con_il_microfono.png"),
    sfortuna: 92,
  },

  {
    id: 45,
    title: "La sicurezza ti scambia per un fan",
    image: require("../../img/45)la_sicurezza_ti_scambia_per_un_fan.png"),
    sfortuna: 94,
  },

  {
    id: 46,
    title: "Il tuo strumento si rompe davanti ai tuoi idoli musicali",
    image: require("../../img/46)il_tuo_strumento_si_rompe_davanti_ai_tuoi_idoli.png"),
    sfortuna: 96,
  },

  {
    id: 47,
    title: "Il pubblico ti fischia per tutto il live",
    image: require("../../img/47)vieni_continuamente_fischiato.png"),
    sfortuna: 98,
  },

  {
    id: 48,
    title: "La tua chitarra prende fuoco",
    image: require("../../img/48)la_tua_chitarra_prende_fuoco.png"),
    sfortuna: 100,
  },

  {
    id: 49,
    title: "ti rompi la testa davanti a tutti",
    image: require("../../img/49)ti_rompi_la_testa_davanti_a_tutti.png"),
    sfortuna: 100,
  },

  {
    id: 50,
    title: "i membri della band ti picchiano",
    image: require("../../img/50)i_membri_della_band_ti_picchiano.png"),
    sfortuna: 100,
  },
];

export default cardsData;

import { Font } from "@react-pdf/renderer";

Font.register({
  family: 'Roboto', fonts: [
    { src: './src/AiBusinessInsights/assets/fonts/roboto/Roboto-Regular.ttf' },
    { src: './src/AiBusinessInsights/assets/fonts/roboto/Roboto-Italic.ttf', fontStyle: 'italic' },
    { src: './src/AiBusinessInsights/assets/fonts/roboto/Roboto-BoldItalic.ttf', fontStyle: 'italic', fontWeight: 700 },
    { src: './src/AiBusinessInsights/assets/fonts/roboto/Roboto-Bold.ttf', fontWeight: 700 },
  ]
});

Font.register({
  family: 'PT Sans', fonts: [
    { src: './src/AiBusinessInsights/assets/fonts/PTSans/PTSans-Regular.ttf' },
    { src: './src/AiBusinessInsights/assets/fonts/PTSans/PTSans-Italic.ttf', fontStyle: 'italic' },
    { src: './src/AiBusinessInsights/assets/fonts/PTSans/PTSans-BoldItalic.ttf', fontStyle: 'italic', fontWeight: 700 },
    { src: './src/AiBusinessInsights/assets/fonts/PTSans/PTSans-Bold.ttf', fontWeight: 700 },
  ]
});

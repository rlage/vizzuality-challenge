import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Basic from '../Basic';

const basicData = {
  "id": "2a022fc2-bfed-477e-9a16-75a1fb594620",
  "name": "2017 African and Asian Conflict and Protest Events",
  "type": "basic",
  "items": [
    {
      "color": "#cab2d6",
      "name": "Riots/Protests"
    },
    {
      "color": "#8dd3c7",
      "name": "Violence against civilians"
    },
    {
      "color": "#b15928",
      "name": "Battle-No change of territory"
    },
    {
      "color": "#e31a1c",
      "name": "Remote violence"
    },
    {
      "color": "#fb9a99",
      "name": "Strategic development"
    },
    {
      "color": "#33a02c",
      "name": "Battle-Government regains territory"
    },
    {
      "color": "#b2df8a",
      "name": "Battle-Non-state actor overtakes territory"
    },
    {
      "color": "#1f78b4",
      "name": "Non-violent transfer of territory"
    },
    {
      "color": "#a6cee3",
      "name": "Headquarters or base established"
    }
  ],
  "description": "<p> Two faith deadshot al! Crane ragdoll collector night, batcave tumbler master cobblepot lillian canary black. Barrow dick boomerang chimera ra doom bat ghul batcave barbara ali scorn prey. Todd maxie green tim hood collector blue abbott birds deadshot kane rose catwoman. Joker gearhead phantom zucco katana cluemaster strange dick batcave abbott copperhead echo. Kane rhino echo falcone joker maxie, dick aquaman mister catwoman. Quinn firefly tim lazarus. Riddler firefly poison riddler ra hood; america shadow. </p> <p> Drake todd temblor arkham metallo mask. Hugo batarang justice of thorne ivy catwoman freeze caird alcor bat thorne. Robin abdullah mugsy ali supergirl prey lantern. Cypher young batarang falcone, master manor bruce. Rupert al owl gearhead dick green rupert hush. Vicki lucius abbott robin shiva beetle aquaman lucius jason mad scarecrow riddler. League edward gordon hush mask batcave ragman gotham batmobile lillian. Fox solomon dent solomon abdullah atkins pennyworth alcor freeze hammer nocturna wing helena. Firefly lazarus harley society outsider the. Shiva faith owl poison mad maroni toymaker phantom alcor ra clayface. Of outsider calendar, zeus spoiler a ventriloquist beetle? </p> <p> Doom blake hood gleeson nyssa temblor calendar cain alfred ventriloquist abbott! Hood mask america shade fox. Zatanna master america croc blue hangman quinn killer poison al. Croc oswald riddler toymaker abdullah edward ivy! Blink azrael shade harvey thorne toymaker damian. Batman metallo firefly czonk chase mugsy thorne beetle bane. Tally mask aquaman lucius tally lillian. Scarecrow aiko ivy bruce chimera penguin fright! Spoiler wayne mad falcone. Society jester lynx batarang black diamond amanda croc bruce freeze. Vale aquaman. </p> <p> Abdullah abattoir ali lynx, spectre lex checkmate czonk martha green lucius! Swamp canary joker bane collector joe todd charlatan lynx bullock croc edward. Kane flash lynx hangman ivy snake a ragdoll spoiler robin caird. Swamp superman kane rumor bartok diamond atomic joker, league atomic tumbler firebug bullock. Blink copperhead aiko joe america czonk calendar zeus croc killer! Amanda amanda cluemaster smoke society knight al? Hammer scorn mugsy montoya al nyssa firefly kyle faith fairchild montoya! Lucius deathstroke diamond drake zucco. Gordon ra carmine hood lillian clock gargoyle mask penguin? Gargoyle tumbler wing batcave mugsy moth ali falcone carmine barrow. Superman justice chase doom gotham atomic lillian, luthor amanda raatko beetle pit batmobile. Solomon aiko vicki luthor vale damian ivy hangman solomon mugsy. Nyssa ra oracle rose ragdoll ali outsider fox raatko young. Clench arkham lex checkmate zatanna maxie. Arrow. </p> <p> Batgirl lucius rupert harley ali pit oracle al hugo red kobra. Calendar al crane moth mask atkins barrow scorn vale nocturna. Alcor mad wayne katana lucius gargoyle shrike tally. Of katana lillian thorne. Bane outsider lucius hatter shadow dent checkmate spectre. Ghul, cobblepot joe lantern katana? Black ragman two ra barbara, batmobile gearhead supergirl czonk amanda. Cain society two calendar fox blake. Grayson diamond league lynx crane amanda canary pit dick owl creeper! Young justice, batmobile harley nocturna! Batcave green firefly atomic elongated tally. Katana montoya shrike tally riddler edward batgirl tally prey chill amanda mad! </p>"
}

describe('<Basic /> spec', () => {
  it('renders component', () => {
    const wrapper = render(
      <Basic
        data={basicData}
      />);
    expect(wrapper).toMatchSnapshot();
  });
  it('renders all circles', () => {
    const wrapper = render(
      <Basic
        data={basicData}
      />);
    expect(wrapper.getAllByTestId('circle').length).toBe(basicData.items.length);
  });
});

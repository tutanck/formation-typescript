import * as _ from "lodash";

import { Album } from "./Album";
import display from "./Display";
import { JazzMusician } from "./JazzMusician";
import { log } from "./Log";
import { Musician } from "./Musician";
import { RockStar } from "./RockStar";

log("Bienvenue dans ma première application TypeScript.");

const musician1 = new JazzMusician("Miles", "Davis", 89);
musician1.addAlbum(new Album("Kind Of Blue"));
musician1.addAlbum(new Album("Tutu"));

const musician2 = new RockStar("Mick", "Jagger", 72);

const musicians: Musician[] = [musician1, musician2];

display(musicians);

_.each(musicians, log);

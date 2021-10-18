import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private vseries = [
    {
      id : '1',
      nombre : 'snk',
      comentario : 'Un muy buen anime con una muy buena trama, spoiler.... no te encariñes de ni un personaje',
      imgURL : 'https://depor.com/resizer/V1pkXmK5x6RxZSweLUAEvMVx9s4=/1200x675/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/N2EZ45E5PNB37GLBVB2GO3E2PI.PNG',
      resumen : 'Cuenta la historia de la humanidad en una época con estética germana del siglo 19, luchando por sobrevivir durante los ataques de unos seres humanoides gigantes llamados titanes. Los titanes se dedican a comer humanos por puro gusto. Luego de una larga espera, los fanáticos pudieron presenciar cómo continuaba la historia de Eren, Levi y su grupo de soldados.',
      nota : '9.0/10'
    },
    {
      id :'2',
      nombre : 'code geass',
      comentario : 'Sin duda un buen anime que mas gente deberia conocer, spoiler...... Un joven con un poder para poder crear una super potencia y talvez mas',
      imgURL : 'https://tdj.gg/uploads/attachs/28550_code.jpg',
      resumen : 'Code Geass se desarrolla en una realidad alternativa donde el Sacro Imperio de Britannia, una superpotencia internacional, ha conquistado más de un tercio del planeta. El mundo, principalmente, es dividido entre esta y otras dos superpotencias: la Federación China y la Unión Europea.',
      nota : '9.5/10'
    }
  ]
  constructor() { }
  getSeries(){
    return [...this.vseries]
  }
  getSerie(serieId: string){
    return{
      ...this.vseries.find(serie => {
        return serie.id === serieId
      })
    }
  }
}

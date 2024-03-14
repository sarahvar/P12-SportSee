export class RadarData {
    constructor(data, kindOfMapping) {
      this.data = data;
      this.kindOfMapping = kindOfMapping;
    }
  
    format() {
      return this.data.map((item) => ({
        kind: this.kindOfMapping[item.kind],
        value: item.value,
      }));
    }
  } 

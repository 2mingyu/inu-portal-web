import { Place } from "../DB";

export const placesMarkDB = (
    places: Place[],
    imageSrc: string,
    mode: number,
    map: any
) => {
    places.forEach((place) => {
        displayMarker(place, imageSrc, mode, map);
    });
};

const displayMarker = (
    place: Place,
    imageSrc: string,
    mode: number,
    map: any
) => {
    const imageSize = new window.kakao.maps.Size(24, 35);
    const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize);
    const marker = new window.kakao.maps.Marker({
        map,
        position: new window.kakao.maps.LatLng(place.latitude, place.longitude),
        title: place.place_name,
        image: markerImage,
    });


    let iwContent;
    if (mode === 1) {
        iwContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 200px; border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); padding: 15px; background-color: #fff;">
          <h3 style="border-bottom: 2px solid #f1f1f1; padding-bottom: 8px; margin-bottom: 20px; font-size: 18px; color: #555;">${place.category}</h3>
          <div style="margin-bottom: 12px;">
              <strong style="display: inline-block; width: 80px; color: #444;">위치:</strong>
              <span>${place.place_name} </span>
          </div>
      </div>`;
    }
    if (mode === 2) {
        iwContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 200px; border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); padding: 15px; background-color: #fff;">
          <h3 style="border-bottom: 2px solid #f1f1f1; padding-bottom: 8px; margin-bottom: 20px; font-size: 18px; color: #555;">${
            place.category
        }</h3>
          <div style="margin-bottom: 12px;">
              <strong style="display: inline-block; width: 80px; color: #444;">위치:</strong>
              <span>${place.place_name} ${place.restareaInfo?.roomNumber}</span>
          </div>
          <div style="margin-bottom: 12px;">
              <strong style="display: inline-block; width: 80px; color: #444;">여성용품:</strong>
              <span>${
            place.restareaInfo?.hasFemaleProducts ? "있음" : "없음"
        }</span>
          </div>
          <div style="margin-bottom: 12px;">
              <strong style="display: inline-block; width: 80px; color: #444;">침대:</strong>
              <span>${place.restareaInfo?.bedCount}개</span>
          </div>
          <div style="margin-bottom: 12px;">
              <strong style="display: inline-block; width: 80px; color: #444;">탈의실:</strong>
              <span>${
            place.restareaInfo?.hasChangingRoom ? "있음" : "없음"
        }</span>
          </div>
          <div style="margin-bottom: 12px;">
              <strong style="display: inline-block; width: 80px; color: #444;">샤워실:</strong>
              <span>${
            place.restareaInfo?.hasShowerRoom ? "있음" : "없음"
        }</span>
          </div>
      </div>`;
    }

    const infowindow = new window.kakao.maps.InfoWindow({
        content: iwContent,
        removable: true,
    });

    window.kakao.maps.event.addListener(marker, "click", () => {
        infowindow.open(map, marker);
    });
};

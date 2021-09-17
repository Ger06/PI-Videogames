import React from "react";
import { configure, shallow, mount } from "enzyme";
import CreateGame from "./CreateGame.jsx";
import Enzyme from 'enzyme';
import * as redux from 'react-redux'

import { useDispatch, useSelector } from 'react-redux';


const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

describe("<CreateGame />", () => {
  describe("Estructura", () => {
    let wrapper;
    
    beforeEach(() => {
      wrapper = Enzyme.shallow(<CreateGame />);
    });
    it("Renderiza un <form>", () => {
      expect(wrapper.find("form")).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "Name"', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(0).text()).toEqual("Name: ");
    });

    it('Renderiza un input con la propiedad "name" igual a "name"', () => {
      expect(wrapper.find('input[name="name"]')).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "Released"', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(1).text()).toEqual("Released: ");
    });

    it('Renderiza una textarea con la propiedad "name" igual a "released"', () => {
      expect(wrapper.find('input[name="released"]')).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "Rating"', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(2).text()).toEqual("Rating: ");
    });

    it('Renderiza un input con la propiedad "name" igual a "rating"', () => {
      expect(wrapper.find('input[name="rating"]')).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "Description"', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(3).text()).toEqual("Description: ");
    });

    it('Renderiza un input con la propiedad "name" igual a "Description"', () => {
      expect(wrapper.find('textarea[name="description"]')).toHaveLength(1);
    });

    
    it('Renderiza un label con el texto igual a "Platforms"', () => {
        // El orden en el que se encuentran los Labels es importante.
        expect(wrapper.find("label").at(4).text()).toEqual("Platforms: ");
      });
  
    it('Renderiza un input con la propiedad "name" igual a "Platforms"', () => {
        expect(wrapper.find('input[name="platforms"]')).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "Select Genres"', () => {
        // El orden en el que se encuentran los Labels es importante.
        expect(wrapper.find("label").at(5).text()).toEqual("Select Genres");
    });

    it('Renderiza un select con la propiedad "name" igual a "Genres"', () => {
        expect(wrapper.find('select[name="genres"]')).toHaveLength(1);
    });

    it('Renderiza un boton con el "type" "submit"', () => {
        expect(wrapper.find('button[type="submit"]')).toHaveLength(1);
      });
  
  });
})       
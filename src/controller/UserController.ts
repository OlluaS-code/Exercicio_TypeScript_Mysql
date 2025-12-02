import { Request, Response } from 'express';
import { UserService } from '../service/UserService';

export class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  public getAll = async (req: Request, res: Response) => {
    try {
      const users = await this.userService.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: 'Error chamando users' });
    }
  };

  public getById = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const user = await this.userService.findById(id);
      if (!user) return res.status(404).json({ message: 'User not found' });
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'Error chamando user' });
    }
  };

  public create = async (req: Request, res: Response) => {
    try {
      const newUser = await this.userService.create(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: 'Error ao criar user' });
    }
  };

  public update = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const updatedUser = await this.userService.update(id, req.body);
      if (!updatedUser) return res.status(404).json({ message: 'User not found' });
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: 'Error ao atualizar user' });
    }
  };

  public delete = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const success = await this.userService.delete(id);
      if (!success) return res.status(404).json({ message: 'User not found' });
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ message: 'Error ao deletar user' });
    }
  };
}
